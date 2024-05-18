<script lang="ts">
    import type { PageData } from "./$types";
    import { subTitle } from "$lib/stores";
    import UploadWidget from "$lib/components/UploadWidget.svelte";
    import Card from "$lib/ui/Card.svelte";
    import { localeHistoryService } from "$lib/services/localehistory-service";
    import { currentSession } from "$lib/stores";
    import { get } from "svelte/store";
    import PlacemarkMap from "$lib/ui/PlacemarkMap.svelte";
    import { onMount } from "svelte";

    export let data: PageData;
    let placemarkMap: PlacemarkMap;

    onMount(async () => {
  if (typeof data.placemark.title === "string") {
    const popup = `${data.placemark.title}: ${data.placemark.category}`;
    if (placemarkMap) {
        placemarkMap.addPlacemarkMarker(data.placemark.lat, data.placemark.lng, popup);
    } else {
      console.error('map is not initialized yet');
    }
  }
});

    subTitle.set(`${data.placemark.title}`);

    let imgUrl: string;

    function handleImageUploaded(event: CustomEvent) {
        console.log('Image uploaded event received:', event);
        const { imgUrl: uploadedImgUrl, placemarkId } = event.detail;
        console.log('Uploaded image URL:', uploadedImgUrl);
        console.log('Placemark ID:', placemarkId);
        if (data.placemark._id === placemarkId) {
            imgUrl = uploadedImgUrl;
            console.log('Image URL set for placemark:', imgUrl);
        } else {
            console.warn('Placemark ID mismatch:', data.placemark._id, placemarkId);
        }
    }
    async function handleDeleteImage() {
        if (imgUrl) {
            try {
                if (data.placemark._id) {
                    const success = await localeHistoryService.deleteImage(data.placemark._id, get(currentSession));
                    if (success) {
                        imgUrl = "";
                        console.log('Image deleted successfully');
                    } else {
                        console.error('Failed to delete image');
                    }
                }
            } catch (error) {
                console.error('Error deleting image:', error);
            }
        }
    }



</script>

<section class="section">
    <div>
        <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <tbody>
                <tr>
                    <td>Description</td>
                    <td>{data.placemark.description}</td>
                </tr>
                <tr>
                    <td>Category</td>
                    <td>{data.placemark.category}</td>
                </tr>
                <tr>
                    <td>Year</td>
                    <td>{data.placemark.year}</td>
                </tr>
                <tr>
                    <td>Latitude</td>
                    <td>{data.placemark.lat}</td>
                </tr>
                <tr>
                    <td>Longitude</td>
                    <td>{data.placemark.lng}</td>
                </tr>
            </tbody>
        </table>
    </div>
</section>

{#if imgUrl}
    <section class="section">
        <div>
            <Card>
                <!-- svelte-ignore a11y-img-redundant-alt -->
                <img src={imgUrl} alt="Placemark image" />
            </Card>
        </div>
    </section>
{/if}

<form>
    <div class="field">
      <div class="control">
        {#if data.placemark._id}
    <UploadWidget placemarkId={data.placemark._id} on:imageUploaded={handleImageUploaded} />
        {/if}   
      </div>
    </div>
    <div class="field">
      <div class="control">
        {#if imgUrl}
        <button class="button is-danger" on:click|preventDefault={handleDeleteImage}>Delete image</button>
        {/if}   
      </div>
    </div>
  </form>

<Card title="Placemark map">
  <PlacemarkMap id={data.placemark.title} height={60} bind:this={placemarkMap} />
</Card>
