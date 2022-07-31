import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";

const Container = styled.div`
  display: inline-block;
  text-align: center;
`;

const Shutter = styled.button`
  width: 120px;
  padding: 0;
  line-height: 40px;
  margin: 10px 0px;
  font-weight: 600;
  text-align: center;
  color: #222831;
  border-radius: 5px;
  transition: all 0.2s;
  background: #ffd369;
  box-shadow: 0px 5px 0px 0px #a77d09;

  :hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #a77d09;
  }
`;

const Angle = styled.div``;

const Download = styled.a`
  display: hidden;
`;

export interface CameraProps {
  fileName: string;
  children?: React.ReactNode;
}

function Camera({ children, fileName }: CameraProps) {
  const angleRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLAnchorElement>(null);

  const takePicture = useCallback(async () => {
    if (angleRef.current) {
      const canvas = await html2canvas(angleRef.current);
      if (downloadRef.current) {
        downloadRef.current.href = canvas?.toDataURL();
        downloadRef.current.download = fileName + ".png";
        downloadRef.current.click();
      }
    }
  }, [fileName]);

  return (
    <Container>
      <Shutter onClick={takePicture}>이미지로 저장</Shutter>
      <Download data-testid="download" ref={downloadRef} />
      <Angle ref={angleRef}>{children}</Angle>
    </Container>
  );
}

export default Camera;
