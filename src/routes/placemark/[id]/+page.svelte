<script lang="ts">
    import type { PageData } from "./$types";
    import { subTitle } from "$lib/stores";
    import UploadWidget from "$lib/components/UploadWidget.svelte";
    import Card from "$lib/ui/Card.svelte";

    export let data: PageData;

    subTitle.set(`${data.placemark.title}`);

    let imgUrl: string;

    function handleImageUploaded(event: CustomEvent) {
        const { imgUrl: uploadedImgUrl, placemarkId } = event.detail;
        if (data.placemark._id === placemarkId) {
            imgUrl = uploadedImgUrl;
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
      <label for="image-upload" class="label">Image</label>
      <div class="control">
        <UploadWidget placemarkId={data.placemark._id} on:imageUploaded={handleImageUploaded} />
      </div>
    </div>
  </form>

