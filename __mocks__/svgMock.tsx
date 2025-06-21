import React from 'react';

const SvgMock = (props: React.SVGProps<SVGSVGElement>) => {
  return <svg role="img" data-testid="svg-icon" {...props} />;
};

export default SvgMock;
