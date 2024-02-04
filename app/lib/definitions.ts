export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type UserTable = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Education = {
  id: string;
  title: string;
  school: string;
  location: string;
}

export type EducationTable = {
  id: string;
  title: string;
  school: string;
  location: string;
}

export type Job = {
  id: string;
  name: string;
  title: string;
  description: string;
  skills: string[];
  projects: string[];
  startDate: string;
  endDate?: string; 
}

export type JobTable = {
  id: string;
  name: string;
  title: string;
  description: string;
  skills: string;
  projects: string;
  startDate: string;
  endDate?: string; 
}

export type EducationField = {
  id: string;
  title: string;
  school: string;
  location: string;
}

export type JobField = {
  id: string;
  name: string;
  title: string;
  description: string;
  skills: string[];
  projects: string[];
  startDate: string;
  endDate?: string;
}