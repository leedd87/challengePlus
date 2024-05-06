export interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export enum APIMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
