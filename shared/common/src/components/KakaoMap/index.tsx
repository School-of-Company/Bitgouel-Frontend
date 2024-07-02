'use client'

import { Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk'

const KakaoMap = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: '400px', height: '400px' }}
      level={3}
      draggable={false}
      zoomable={false}
    >
      <ZoomControl position={'RIGHT'} />
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }} />
    </Map>
  )
}

export default KakaoMap
