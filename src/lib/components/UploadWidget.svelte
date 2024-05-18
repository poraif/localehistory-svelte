<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';

    export let placemarkId: string;
    let widget: { open: () => void; };
    let imgUrl: string;

    const dispatch = createEventDispatcher();
    const cloudinary = typeof window !== 'undefined' ? (window as any).cloudinary : null;

    onMount(() => {
        if (cloudinary) {
            widget = cloudinary.createUploadWidget({
                cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
            }, (error: any, result: any) => {
                if (!error && result && result.event === "success") {
                    imgUrl = result.info.secure_url;
                    dispatch('imageUploaded', { imgUrl, placemarkId });
                }
            });
        }
    });

    function handleClick() {
        if (widget) {
            widget.open();
        }
    }
</script>

<button class="button is-success" on:click|preventDefault={handleClick}>Upload</button>
