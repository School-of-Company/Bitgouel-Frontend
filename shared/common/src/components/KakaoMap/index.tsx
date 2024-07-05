'use client'

import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk'

interface Props {
  lat: number
  lng: number
}

const KakaoMap = ({ lat, lng }: Props) => {
  return (
    <Map
      center={{ lat: !isNaN(lat) ? lat : 0, lng: !isNaN(lng) ? lng : 0 }}
      style={{ width: '31.25rem', height: '25rem' }}
      level={3}
      draggable={false}
      zoomable={false}
    >
      <ZoomControl position={'RIGHT'} />
      <MapMarker
        position={{ lat: !isNaN(lat) ? lat : 0, lng: !isNaN(lng) ? lng : 0 }}
      />
    </Map>
  )
}

export default KakaoMap
