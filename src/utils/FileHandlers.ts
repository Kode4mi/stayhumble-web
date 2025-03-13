export function handleImageSelect(e: React.ChangeEvent<HTMLInputElement>, setSelectedImageName: React.Dispatch<React.SetStateAction<string>>, setSelectedImageURL: React.Dispatch<React.SetStateAction<string | undefined>>) {
	if (e.target.files === null) return;

	setSelectedImageName(e.target.value);
	const selectedFile = e.target.files[0];
	setSelectedImageURL(URL.createObjectURL(selectedFile));
}

export function cancelImageSelect(setSelectedImageName: React.Dispatch<React.SetStateAction<string>>, setSelectedImageURL: React.Dispatch<React.SetStateAction<string | undefined>>) {
	setSelectedImageName('');
	setSelectedImageURL(undefined);
}