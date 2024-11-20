import {Voice} from "@/components/Voice"
export function ContentSidebar({selectedOption}) {

    const renderContent = () => {
        switch (selectedOption) {
          case "Voice":
            return <Voice/>;
          case "Settings":
            return <div>Settings</div>;
          case "Calendar":
            return <div>Calender</div>;
          default:
            return <div>Hash</div>;
        }
      };

    return (
        <div className="md:w-[14rem] min-w-[150px] md:block hidden pt-2 border-r">
            {renderContent()}
        </div>
    )
}
