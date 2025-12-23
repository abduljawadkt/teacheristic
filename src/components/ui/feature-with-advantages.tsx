import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4 py-20 lg:py-40 flex-col items-start">
          <div>
            <Badge className="bg-gradient-to-r from-[#469ad4] to-[#31bbdb] text-white border-0">
              Platform
            </Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-slate-900">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-slate-600">
              Our platform provides comprehensive support to help you achieve your academic and career goals.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 items-start md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Global Network</p>
                  <p className="text-slate-600 text-sm">
                    Connect with leading institutions and opportunities worldwide through our extensive network.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Personalized Guidance</p>
                  <p className="text-slate-600 text-sm">
                    Receive tailored career insights and mentorship to help you navigate your academic journey.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Verified Profiles</p>
                  <p className="text-slate-600 text-sm">
                    Build a validated profile that stands out to universities and institutions.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#469ad4] to-[#31bbdb] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Exclusive Resources</p>
                  <p className="text-slate-600 text-sm">
                    Access premium content, webinars, and resources designed for high achievers.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#31bbdb] to-[#87ca92] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Priority Matching</p>
                  <p className="text-slate-600 text-sm">
                    Get matched with opportunities that align perfectly with your goals and aspirations.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-6 h-6 mt-1 rounded-full bg-gradient-to-br from-[#87ca92] to-[#469ad4] flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-slate-900">Continuous Support</p>
                  <p className="text-slate-600 text-sm">
                    Benefit from ongoing guidance and support throughout your academic and career journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
