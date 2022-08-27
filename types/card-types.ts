export interface TeamCardItem {
  avatar: string
  alt: string
  title: string
  silo: "Strategy" | "Design" | "Development" | "Marketing" | "Production" | "Technology" | "Completed"
}

export interface TalentCarouselSlideItem {
  name: string
  title: string
  avatar: string
  alt: string
  previously: string
  countryLogo: string
  countryTitle: string
}

interface CountryItem {
  id: number
  name: string
  type: string
  order: number
}

export interface TalentCarouselSlideItemHubDB {
  id: string
  full_name: string
  country: CountryItem
  position: string
  previously_at: string
  avatar: string
  company_logo: string
}

export interface TestimonialCarouselSlideItem {
  review: string
  name: string
  title: string
  company: string
  image: string
}

export interface TestimonialSlideItem {
  avatar: string
  background_image: string
  client_name: string
  company: string
  company_logo: string
  company_logo_icon: string
  createdAt?: string
  id: string
  quote: string
  title: string
  updatedAt?: string
}
