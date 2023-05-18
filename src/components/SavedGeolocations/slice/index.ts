import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface SavedGeolocation {
    label: string;
    value: string;
    lat: number; 
    lon: number;
}

export interface SavedGeolocationsState {
    data: SavedGeolocation[] | [],
    selectedGeoLocation: SavedGeolocation | null;
}

const initialState: SavedGeolocationsState = {
    data: typeof window !== "undefined" ? JSON.parse(localStorage.getItem('savedGeolocations') as string) ?? [] : [],
    selectedGeoLocation: typeof window !== "undefined" ? JSON.parse(localStorage.getItem('selectedGeoLocation') as string) ?? '' : '',
}

export const { reducer, actions: { saveGeo, removeGeo, saveSelectedGeo } } = createSlice({
    name: 'savedGeoLocations',
    initialState,
    reducers: {
        saveGeo(state, { payload }: PayloadAction<SavedGeolocation>) {
            const existing = state.data.find(({ value }) => value === payload.value);

            if (!existing) {
                state.data = [...state.data, payload]
                localStorage.setItem('savedGeolocations', JSON.stringify(state.data));
            }
        },
        removeGeo(state, { payload }: PayloadAction<SavedGeolocation>) {
            state.data = state.data.filter(({ value }) => value !== payload.value);
            localStorage.setItem('savedGeolocations', JSON.stringify(state.data));

            if (state.selectedGeoLocation?.value === payload.value) {
                localStorage.removeItem('selectedGeoLocation');
                state.selectedGeoLocation = null;
            }
        },
        saveSelectedGeo(state, { payload }: PayloadAction<string>) {
            const geoItem = state.data.find(({ value }) => value === payload);

            if (geoItem) {
                state.selectedGeoLocation = geoItem;
                localStorage.setItem('selectedGeoLocation', JSON.stringify(geoItem));
            }
        }
    }
})