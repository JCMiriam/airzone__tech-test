import React from 'react';

const SvgMock = (props: React.SVGProps<SVGSVGElement>) => {
  return <svg data-testid="svg-icon" {...props} />;
};

export default SvgMock;
