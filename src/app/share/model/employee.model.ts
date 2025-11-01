export interface IEmployee {
  id?: number;
  name?: string;
  department?: string;
  performance?: number;
  rating?: 'Excellent' | 'Good' | 'Average' | 'Poor';
}
