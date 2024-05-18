<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';

    export let placemarkId: string;
    let widget: { open: () => void; };
    let imgUrl: string;

    const dispatch = createEventDispatcher();
    const cloudinary = typeof window !== 'undefined' ? (window as any).cloudinary : null;

    onMount(() => {
        if (cloudinary) {
            console.log('Cloudinary widget initializing...');
            widget = cloudinary.createUploadWidget({
                cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
                uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
            }, (error: any, result: any) => {
                if (error) {
                    console.error('Upload error:', error);
                } else if (result && result.event === "success") {
                    console.log('Upload successful:', result.info);
                    imgUrl = result.info.secure_url;
                    dispatch('imageUploaded', { imgUrl, placemarkId });
                }
            });
            console.log('Cloudinary widget initialized.');
        } else {
            console.error('Cloudinary is not available');
        }
    });

    function handleClick() {
        if (widget) {
            console.log('Opening Cloudinary upload widget');
            widget.open();
        } else {
            console.error('Cloudinary widget is not initialized');
        }
    }
</script>

<button class="button is-success" on:click|preventDefault={handleClick}>Upload image</button>
