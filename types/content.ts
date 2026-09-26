export type Course = {
  slug: string;
  title: string;
  category: string;
  duration: string;
  mode: string;
  // fee: string;
  description: string;
  highlights: string[];
  curriculum: string[];
  eligibility: string[];
  instructor: string;
};

// export type Placement = {
//   name: string;
//   course: string;
//   company: string;
//   role: string;
//   testimonial: string;
//   image: string;
// };
export type Placement = {
  id: number;
  name: string;
  company: string;
  location: string;
  role: string;
  package: string;
  status?: string;
};

export type Partner = {
  name: string;
  type: string;
  description: string;
};

export type Leader = {
  id: number;
  name: string;
  title: string;
  bio: string;
  image: string;
  url: string;
};

export type Review = {
  name: string;
  company: string;
  quote: string;
  rating: number;
};
