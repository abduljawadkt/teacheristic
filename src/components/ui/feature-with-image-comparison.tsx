import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { GripVertical } from "lucide-react";

interface FeatureProps {
  badge?: string;
  title?: string;
  description?: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
}

function Feature({
  badge = "Platform",
  title = "Something new!",
  description = "Managing a small business today is already tough.",
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
}: FeatureProps) {
  const [inset, setInset] = useState<number>(50);
  const [onMouseDown, setOnMouseDown] = useState<boolean>(false);

  const onMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!onMouseDown) return;

    const rect = e.currentTarget.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInset(percentage);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Badge className="bg-lavender-100 text-lavender-700 border-lavender-200 hover:bg-lavender-200">{badge}</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-bold text-navy-900">
              {title}
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-slate-600">
              {description}
            </p>
          </div>
          <div className="pt-12 w-full">
            <div
              className="relative aspect-video w-full h-full overflow-hidden rounded-2xl select-none"
              onMouseMove={onMouseMove}
              onMouseUp={() => setOnMouseDown(false)}
              onTouchMove={onMouseMove}
              onTouchEnd={() => setOnMouseDown(false)}
            >
              <div
                className="bg-navy-700 h-full w-1 absolute z-20 top-0 -ml-1 select-none"
                style={{
                  left: inset + "%",
                }}
              >
                <button
                  className="bg-lavender-500 text-white rounded-lg hover:scale-110 transition-all w-8 h-12 select-none -translate-y-1/2 absolute top-1/2 -ml-4 z-30 cursor-ew-resize flex justify-center items-center shadow-lg"
                  onTouchStart={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onMouseDown={(e) => {
                    setOnMouseDown(true);
                    onMouseMove(e);
                  }}
                  onTouchEnd={() => setOnMouseDown(false)}
                  onMouseUp={() => setOnMouseDown(false)}
                >
                  <GripVertical className="h-5 w-5 select-none" />
                </button>
              </div>
              <img
                src={beforeImage}
                alt={beforeAlt}
                className="absolute left-0 top-0 z-10 w-full h-full aspect-video rounded-2xl select-none border border-slate-200 object-cover"
                style={{
                  clipPath: "inset(0 0 0 " + inset + "%)",
                }}
              />
              <img
                src={afterImage}
                alt={afterAlt}
                className="absolute left-0 top-0 w-full h-full aspect-video rounded-2xl select-none border border-slate-200 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
