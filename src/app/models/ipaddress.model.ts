export interface IPAddressData {
    ip_address: string
    city: string
    city_geoname_id: number
    region: string
    region_iso_code: string
    region_geoname_id: number
    postal_code: string
    country: string
    country_code: string
    country_geoname_id: number
    country_is_eu: boolean
    continent: string
    continent_code: string
    continent_geoname_id: number
    longitude: number
    latitude: number
    security: Security
    timezone: Timezone
    flag: Flag
    currency: Currency
    connection: Connection
  }
  
  export interface Security {
    is_vpn: boolean
  }
  
  export interface Timezone {
    name: string
    abbreviation: string
    gmt_offset: number
    current_time: string
    is_dst: boolean
  }
  
  export interface Flag {
    emoji: string
    unicode: string
    png: string
    svg: string
  }
  
  export interface Currency {
    currency_name: string
    currency_code: string
  }
  
  export interface Connection {
    autonomous_system_number: number
    autonomous_system_organization: string
    connection_type: string
    isp_name: string
    organization_name: any
  }
  