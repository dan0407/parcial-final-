export interface albun {
	image?: string;
	namealbun?: string;
	author?: string;
	price?: string;
	stock?: string;
}
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    screen: string,
}


export enum ScreenActions {
    "NAVIGATE" = "NAVIGATE",
}
