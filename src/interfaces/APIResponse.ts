export default interface APIResponse {
  success: boolean
  message: {[title: string]: any}
  error: any
}