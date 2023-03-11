<script>
	/** @type {string}*/
	export let icon;

	/** @type {string}*/
	export let text = '';
</script>

<div class="flex basis-0 grow flex-col items-center gap-2">
	<span class={icon} />
	<span class="text-sm">{text}</span>
</div>
