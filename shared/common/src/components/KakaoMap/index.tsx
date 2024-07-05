'use client'

import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk'

interface Props {
  lat: number
  lng: number
}

const KakaoMap = ({ lat, lng }: Props) => {
  return (
    <Map
      center={{ lat: !isNaN(lat) && lat, lng: !isNaN(lng) && lng }}
      style={{ width: '31.25rem', height: '25rem' }}
      level={3}
      draggable={false}
      zoomable={false}
    >
      <ZoomControl position={'RIGHT'} />
      <MapMarker
        position={{ lat: !isNaN(lat) && lat, lng: !isNaN(lng) && lng }}
      />
    </Map>
  )
}

export default KakaoMap
