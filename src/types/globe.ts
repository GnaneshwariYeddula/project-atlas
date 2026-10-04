export interface GlobeMarker {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  description?: string;
  type?: string;
}