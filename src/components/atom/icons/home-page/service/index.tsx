import { DropOffIcon } from './drop-off';
import { ExpeditedPickupIcon } from './expedited-pickup';
import { OnSiteRepairIcon } from './on-site-repair';
import { StandardPickupIcon } from './standard-pickup';

export const ServiceIcons = {
  DropOff: DropOffIcon,
  OnSiteRepair: OnSiteRepairIcon,
  ExpeditedPickup: ExpeditedPickupIcon,
  StandardPickup: StandardPickupIcon,
} as const;
