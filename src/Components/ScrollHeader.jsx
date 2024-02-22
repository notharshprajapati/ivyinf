import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const ScrollHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1000) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  const canvasRef = useRef(null);

  const createImage = (src) => {
    const img = document.createElement("img");
    img.src = src;
    return img;
  };

  const images = useMemo(() => {
    return [...new Array(147)].map((_, i) =>
      createImage(
        `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
          i + 1
        )
          .toString()
          .padStart(4, "0")}.jpg`
      )
    );
  }, []);

  const drawImage = (img, ctx) => {
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
  };

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const renderImage = useCallback(
    (progress) => {
      drawImage(
        images[
          Math.min(Math.round(images.length * progress), images.length - 1)
        ],
        canvasRef.current.getContext("2d")
      );
    },
    [images]
  );

  useEffect(() => {
    resizeCanvas();
    const resizeCanvasAndRerender = () => {
      resizeCanvas();
      renderImage(window.scrollY / 1000);
    };
    window.addEventListener("resize", resizeCanvasAndRerender);
    window.addEventListener("scroll", () => {
      renderImage(window.scrollY / 1000);
    });
    return () => {
      window.removeEventListener("resize", resizeCanvasAndRerender);
      window.removeEventListener("scroll", () => {
        renderImage(window.scrollY / 1000);
      });
    };
  }, [resizeCanvas, renderImage]);

  useEffect(() => {
    images[0].onload = () => {
      drawImage(images[0], canvasRef.current.getContext("2d"));
    };
  }, [images]);

  return (
    <div
      id="headerwrap"
      className={`${
        isScrolled ? "static" : "sticky top-0"
      } bg-black w-full h-screen`}
    >
      <canvas id="canvas-container" ref={canvasRef} />
    </div>
  );
};

export default ScrollHeader;
