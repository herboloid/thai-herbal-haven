
import { Button } from "@/components/ui/button";
import { HotButton, getCategoryColors } from "@/utils/hotButtonScenarios";

interface SmartHotButtonsProps {
  buttons: HotButton[];
  onButtonClick: (buttonText: string, buttonId: string) => void;
  disabled?: boolean;
}

const SmartHotButtons = ({ buttons, onButtonClick, disabled = false }: SmartHotButtonsProps) => {
  if (!buttons.length) return null;

  // Sort buttons by priority (higher priority first)
  const sortedButtons = [...buttons].sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {sortedButtons.map((button) => {
        const colors = getCategoryColors(button.category);
        
        return (
          <Button
            key={button.id}
            variant="outline"
            size="sm"
            onClick={() => onButtonClick(button.text, button.id)}
            disabled={disabled}
            className={`
              text-xs h-7 px-3 transition-all duration-200 
              hover:scale-105 hover:shadow-sm
              ${colors.bg} ${colors.text} ${colors.border}
              ${button.priority === 1 ? 'ring-2 ring-offset-1 ring-opacity-50 ' + colors.border : ''}
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {button.text}
          </Button>
        );
      })}
    </div>
  );
};

export default SmartHotButtons;
