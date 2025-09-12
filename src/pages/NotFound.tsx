import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 gradient-bg-subtle rounded-full blur-3xl opacity-10"></div>
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        <div className="glass-card p-12 hover-lift">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-8xl lg:text-9xl font-bold gradient-text mb-4">
              404
            </h1>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-poppins font-semibold text-foreground">
              Page Not Found
            </h2>
            <p className="text-foreground-secondary leading-relaxed max-w-md mx-auto">
              Oops! The page you're looking for seems to have wandered off into the digital void. 
              Let's get you back on track.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              className="btn-primary group"
              onClick={() => window.location.href = "/"}
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <Button 
              variant="outline"
              className="btn-secondary group"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-card-border">
            <p className="text-sm text-foreground-muted">
              If you believe this is an error, please contact me at{" "}
              <a 
                href="mailto:kritikadevi012@gmail.com" 
                className="text-brand-primary hover:underline"
              >
                kritikadevi012@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
