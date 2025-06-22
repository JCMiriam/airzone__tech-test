import React from 'react';

import type { IconName } from '@/types/icons';
import type { IconProps } from './Icon.types';

import ArrowDownIcon from '@/assets/icons/icon-arrow-down.svg?react';
import ArrowLeftIcon from '@/assets/icons/icon-arrow-left.svg?react';
import ArrowRightIcon from '@/assets/icons/icon-arrow-right.svg?react';
import ArrowUpIcon from '@/assets/icons/icon-arrow-up.svg?react';
import BagIcon from '@/assets/icons/icon-bag.svg?react';
import CoolIcon from '@/assets/icons/icon-cool.svg?react';
import HeatIcon from '@/assets/icons/icon-heat.svg?react';
import LeavingIcon from '@/assets/icons/icon-leaving.svg?react';
import MoreIcon from '@/assets/icons/icon-more.svg?react';
import LessIcon from '@/assets/icons/icon-less.svg?react';
import NightIcon from '@/assets/icons/icon-night.svg?react';
import PowerIcon from '@/assets/icons/icon-power.svg?react';
import SofaIcon from '@/assets/icons/icon-sofa.svg?react';
import SunriseIcon from '@/assets/icons/icon-sunrise.svg?react';

const icons: Record<IconName, React.FC<React.SVGProps<SVGSVGElement>>> = {
    arrowUp: ArrowUpIcon,
    arrowDown: ArrowDownIcon,
    arrowLeft: ArrowLeftIcon,
    arrowRight: ArrowRightIcon,
    bag: BagIcon,
    cool: CoolIcon,
    heat: HeatIcon,
    leaving: LeavingIcon,
    more: MoreIcon,
    less: LessIcon,
    night: NightIcon,
    power: PowerIcon,
    sofa: SofaIcon,
    sunrise: SunriseIcon,
};

export const Icon: React.FC<IconProps> = ({ name, width, height, className }) => {
    const SvgIcon = icons[name];

    if (!SvgIcon) return null;

    return (
        <SvgIcon
            width={width}
            height={height}
            className={ className }
            data-testid="svg-icon"
        />
    );
};
