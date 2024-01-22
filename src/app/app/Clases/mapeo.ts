//autosuggest

export interface PlaceInfo{
    xid: string
    name: string
}

export interface PlaceWS{
    type: string
    id: string
    properties: PlaceInfo 
}

export interface Result{

    type: string
    features: PlaceWS[]
}

export interface AddressWS {
    city: string
    state: string
    country: string
}

export interface PreviewWS{
    source: string
}

export interface ResultDetail{
    xid: string
    name: string
    addres: AddressWS
    preview: PreviewWS
}
