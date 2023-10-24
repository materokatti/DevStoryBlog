<script>
	export let data;
</script>


<svelte:head>
	<title>Blog</title>
	<meta name="description" content="About this app" />
</svelte:head>

<section class="blog-nav-bar">
	<ul>
		{#each data.summaries as { slug, title }}
			<li><a href="/blog/{slug}">{title}</a></li>
		{/each}
	</ul>
</section>

<section>
	<div class="text-column">
		<h1>Blog Title</h1>

		<p>
			This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
			the devtools network panel and reloading.
		</p>

		<p>
			The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
			using it with JavaScript disabled!
		</p>
		<p>
			This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
			the devtools network panel and reloading.
		</p>

		<p>
			The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
			using it with JavaScript disabled!
		</p>
		<p>
			This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
			the devtools network panel and reloading.
		</p>

		<p>
			The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
			using it with JavaScript disabled!
		</p>
		<p>
			This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
			following into your command line and following the prompts:
		</p>

		<pre>npm create svelte@latest</pre>

		<p>
			The page you're looking at is purely static HTML, with no client-side interactivity needed.
			Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
			the devtools network panel and reloading.
		</p>

		<p>
			The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
			using it with JavaScript disabled!
		</p>
	</div>
</section>

<style>
	.blog-nav-bar {
		max-width: 20rem;
		border-right: 2px solid #000;
	}
</style>