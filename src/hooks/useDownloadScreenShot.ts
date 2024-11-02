import { useEffect } from "react";
import html2canvas from "html2canvas";

const useDownloadScreenshot = (elementId: string, redirectUrl: string) => {
  useEffect(() => {
    const handleDownload = async () => {
      const element = document.getElementById(elementId);
      if (element) {
        try {
          const canvas = await html2canvas(element, { useCORS: true });
          canvas.toBlob((blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.href = url;
              link.download = "syncUp.png"; // 다운로드할 이미지 파일 이름
              link.click(); // 다운로드 실행
              URL.revokeObjectURL(url); // 메모리 해제
            } else {
              console.error("Failed to create blob from canvas.");
            }
          });
        } catch (error) {
          console.error("Error generating canvas:", error);
        }
      } else {
        console.error("Element not found");
      }
    };

    handleDownload(); // 페이지 로드 시 다운로드 실행

    // 3초 후 리디렉션
    const timer = setTimeout(() => {
      window.location.href = redirectUrl;
    }, 3000);

    return () => clearTimeout(timer); // 클린업
  }, [elementId, redirectUrl]); // 의존성 배열
};

export default useDownloadScreenshot;
