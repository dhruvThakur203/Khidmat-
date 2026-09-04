import type { BranchDeliveryMenu } from './menus';
import { noidaDeliveryMenu } from './menus';

export type BranchId = 'delhi' | 'noida';

export interface Branch {
  id: BranchId;
  number: string;
  name: string;
  area: string;
  city: string;
  address: string;
  phones: string[];
  mapsUrl: string;
  whatsapp?: string;
  deliveryMenu?: BranchDeliveryMenu;
}

export const branches: Record<BranchId, Branch> = {
  delhi: {
    id: 'delhi',
    number: '01',
    name: 'Khidmat',
    area: 'Kalkaji',
    city: 'Delhi',
    address: 'E-9, Main Road, Near Deshbandhu College, Kalkaji, New Delhi',
    phones: ['011-41600195', '011-41600196'],
    mapsUrl:
      'https://www.google.com/maps/place/khidmat+delhi/data=!4m2!3m1!1s0x390ce3dbd8d3e1c5:0x1edc79ddb6b9b849',
  },
  noida: {
    id: 'noida',
    number: '02',
    name: 'Khidmat',
    area: 'Sector 50',
    city: 'Noida',
    address: 'B-1/56, Central Market, Sector 50, Noida',
    phones: ['99992 62580', '99992 12111', '0120-4549300', '0120-4549301', '0120-4549302'],
    mapsUrl:
      'https://www.google.com/maps/place/khidmat+noida/data=!4m2!3m1!1s0x390ce59baf0554df:0xe728e390eee0fbd3',
    whatsapp: '919999262580',
    deliveryMenu: noidaDeliveryMenu,
  },
};

export const branchList: Branch[] = [branches.delhi, branches.noida];

export function formatPhoneLink(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}
