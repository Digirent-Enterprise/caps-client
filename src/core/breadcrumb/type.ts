interface IBreadcrumbItem {
  label: string;
  href?: string;
}

interface IBreadcrumbProps {
  items: IBreadcrumbItem[];
  currentPage: string;
}
