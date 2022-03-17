export type ILabel = {label: string; value: string};

const imageFormats: ILabel[] = [
  {label: 'JPEG', value: 'jpg'},
  {label: 'PNG', value: 'png'},
];

const qualityOptions: ILabel[] = [
  {label: 'Good Quality ~150 KB', value: '0.5'},
  {label: 'High Quality ~250 KB', value: '0.8'},
  {label: 'Best Quality ~350 KB', value: '1.0'},
];

export type ISelectPhoto = {step: number; title: string};

const selectPhoto: ISelectPhoto[] = [
  {step: 1, title: 'Front Side Photo'},
  {step: 2, title: 'Back Side Photo'},
];

export {imageFormats, qualityOptions, selectPhoto};
