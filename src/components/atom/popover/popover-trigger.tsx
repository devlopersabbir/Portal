'use client';

import React, { cloneElement } from 'react';

import { usePopover } from './popover-context';

export function PopoverTrigger({
  children,
}: {
  children: (JSX.Element & { ref?: React.RefObject<any> }) | any;
}) {
  const { getReferenceProps, refs, open, setOpen } = usePopover();
  const isChildrenFunction = typeof children === 'function';

  const childrenToRender = isChildrenFunction
    ? (children as Function)({ open, setOpen })
    : children;

  const childrenProps = isChildrenFunction
    ? children.props?.children.props
    : children.props;

  return (
    <>
      {cloneElement(
        childrenToRender,
        getReferenceProps({ ref: refs.setReference, ...childrenProps })
      )}
    </>
  );
}

PopoverTrigger.displayName = 'PopoverTrigger';
