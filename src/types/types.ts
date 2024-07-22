export interface LayoutProps {
  children: JSX.Element[]
}

export interface AuthFields {
  email: string
  password: string
}

export interface SVGProps {
  color?: string
  height?: string
  width?: string
}

export interface CSVData {
  [key: string]: string
}

export interface ImportData {
  fileName: string
  data: CSVData[]
}
