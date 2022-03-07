<script>
    import Footer from "./Footer.svelte";
</script>

<div id="sidebar" class="d-flex flex-column align-items-center mt-4 py-2 min-vh-100">
	<h4>Sidebar</h4>
    <Footer />
</div>

<style>
	#sidebar {
		position: fixed;
		top: 100px !important;
		bottom: 0 !important;
		z-index: 1000 !important;
	}
</style>
