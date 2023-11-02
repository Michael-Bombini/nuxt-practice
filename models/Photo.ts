export interface PhotoResponse {
    success: boolean
    total_photos: number
    message: string
    offset: number
    limit: number
    photos: Photo[]
  }
  
  export interface Photo {
    description: string
    url: string
    title: string
    id: number
    user: number
  }
  