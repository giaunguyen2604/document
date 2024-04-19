

onResult: ({ result }) => {
			if (result.type === 'success') {
				dispatch('refreshData');
				const toastMsg = typeForm === 'create' ? TOAST_SUCCESS.create_mi : TOAST_SUCCESS.update_mi;
				const t = toastSuccess(toastMsg);
				toastStore.trigger(t);
				if (typeForm === 'create') closeDrawer();

				if (typeForm === 'update' && result.data) {
					const id = result.data.id as number;
					const payload = result.data.payload as MiPayload;
					masterItemList.updateItem(id, payload);
				}
			}

			if (result.type == 'failure' && result.data?.error) {
				const t = toastError(result.data?.error);
				toastStore.trigger(t);
			}
		},


<!-- masterItemList store -->
updateItem(id: number, item: MiPayload) {
		const index = data.findIndex((i) => i.id === id);
		if (index !== -1) {
			data[index] = {
				...data[index],
				name: item.name,
				variants: item.variants.map(({ id, price, base_price, name }) => ({
					id,
					price: price ? Number(price) : null,
					base_price: base_price ? Number(base_price) : null,
					name
				}))
			};
			masterItemList.update((prev) => ({ ...prev, data }));
		}
	}


<!-- in [id] +page.server.ts -->
    return { form, payload: formatData, id };