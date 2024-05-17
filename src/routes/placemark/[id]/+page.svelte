<script lang="ts">
    import type { PageData } from "./$types";
    export let data: PageData;
    import { subTitle } from "$lib/stores";

  
    subTitle.set(`${data.placemark.title}`);
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