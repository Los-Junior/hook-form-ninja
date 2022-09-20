import {
  HomeIcon,
  UserIcon,
  UsersIcon,
  StarIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  BookOpenIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'

export const NavCategories = [
  {
    name: 'Form Básicos',
    items: [
      {
        name: 'Empieza aquí',
        href: '/',
        icon: StarIcon,
        current: (path) => path === '',
      },
      {
        name: 'Autenticación básica',
        href: '/autenticacion-basica',
        icon: UserIcon,
        current: (path) => path === 'autenticacion-basica',
      },
      {
        name: 'Autenticación avanzada',
        href: '/autenticacion-avanzada',
        icon: UsersIcon,
        current: (path) => path === 'autenticacion-avanzada',
      },
    ],
  },
  {
    name: 'Inputs Genéricos',
    items: [
      {
        name: 'Input de texto',
        href: '/inputs-genericos',
        icon: ArrowPathIcon,
        current: (path) => path === 'inputs-genericos',
      },
      {
        name: 'Input de párrafo',
        href: '/inputs-genericos',
        icon: ArrowPathIcon,
        current: (path) => path === 'inputs-genericos',
      },
      {
        name: 'Input de selección',
        href: '/inputs-genericos',

        icon: ArrowPathIcon,
        current: (path) => path === 'inputs-genericos',
      },
      {
        name: 'Input de fecha',
        href: '/inputs-genericos',
        icon: ArrowPathIcon,
        current: (path) => path === 'inputs-genericos',
      },
    ],
  },

  {
    name: 'Form Avanzados',
    items: [
      {
        name: 'Alquiler de inmueble',
        href: '/alquiler-inmueble',
        icon: HomeIcon,
        current: (path) => path === 'alquiler-inmueble',
      },
      {
        name: 'Transferencias',
        href: '/transferencia',
        icon: CurrencyDollarIcon,
        current: (path) => path === 'transferencia',
      },
      {
        name: 'Pagos',
        href: '/pagos',
        icon: CreditCardIcon,
        current: (path) => path === 'pagos',
      },
      {
        name: 'Multiples Direcciones',
        href: '/multiples-direcciones',
        icon: MapPinIcon,
        current: (path) => path === 'multiples-direcciones',
      },
      {
        name: 'Buscar empleo',
        href: '/buscar-empleo',
        icon: BriefcaseIcon,
        current: (path) => path === 'pagar-nomina',
      },
      {
        name: 'Elegir Macbook',
        href: '/macbook',
        icon: ComputerDesktopIcon,
        current: (path) => path === 'macbook',
      },
    ],
  },
  {
    name: 'Integraciones',
    items: [
      {
        name: 'Material UI',
        href: '/integraciones/material-ui',
        icon: BookOpenIcon,
        current: (path) => path === 'material-ui',
      },
      {
        name: 'Chakra UI',
        href: '/integraciones/chakra-ui',
        icon: BookOpenIcon,
        current: (path) => path === 'chakra-ui',
      },
      {
        name: 'Antd',
        href: '/integraciones/antd',
        icon: BookOpenIcon,
        current: (path) => path === 'antd',
      },
    ],
  },
]

export const initialNav = [
  {
    name: 'Empieza aquí',
    href: '/',
    icon: StarIcon,
    current: (path) => path === '',
  },
  {
    name: 'Autenticación básica',
    href: '/autenticacion-basica',
    icon: UserIcon,
    current: (path) => path === 'autenticacion-basica',
  },
  {
    name: 'Autenticación avanzada',
    href: '/autenticacion-avanzada',
    icon: UsersIcon,
    current: (path) => path === 'autenticacion-avanzada',
  },
  {
    name: 'Inputs Genéricos',
    href: '/inputs-genericos',
    icon: ArrowPathIcon,
    current: (path) => path === 'inputs-genericos',
  },
]

export const integrationsNav = [
  {
    name: 'React Select',
    href: '/integraciones/react-select',
    icon: BookOpenIcon,
    current: (path) => path === 'react-select',
  },
  {
    name: 'React Datepicker',
    href: '/integraciones/react-datepicker',
    icon: BookOpenIcon,
    current: (path) => path === 'react-datepicker',
  },
  {
    name: 'Material UI',
    href: '/integraciones/material-ui',
    icon: BookOpenIcon,
    current: (path) => path === 'material-ui',
  },
  {
    name: 'Chakra UI',
    href: '/integraciones/chakra-ui',
    icon: BookOpenIcon,
    current: (path) => path === 'chakra-ui',
  },
  {
    name: 'Antd',
    href: '/integraciones/antd',
    icon: BookOpenIcon,
    current: (path) => path === 'antd',
  },
]

export const advancedNav = [
  {
    name: 'Alquiler de inmueble',
    href: '/alquiler-inmueble',
    icon: HomeIcon,
    current: (path) => path === 'alquiler-inmueble',
  },
  {
    name: 'Transferencias',
    href: '/transferencia',
    icon: CurrencyDollarIcon,
    current: (path) => path === 'transferencia',
  },
  {
    name: 'Pagos',
    href: '/pagos',
    icon: CreditCardIcon,
    current: (path) => path === 'pagos',
  },
  {
    name: 'Multiples Direcciones',
    href: '/multiples-direcciones',
    icon: MapPinIcon,
    current: (path) => path === 'multiples-direcciones',
  },
  {
    name: 'Pagar nomina',
    href: '/pagar-nomina',
    icon: MapPinIcon,
    current: (path) => path === 'pagar-nomina',
  },
]
