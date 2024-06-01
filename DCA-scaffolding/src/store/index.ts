import { AppState } from "../types/store";
import { Screens } from "../types/trips";

const emptyState: AppState = {
	screen: Screens.ADD,


};

export let appState = emptyState;
