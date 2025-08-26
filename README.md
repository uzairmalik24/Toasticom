






# 🚀 Custom React Toast Library (toasticom)

A lightweight and customizable toast notification system for React.

---

## 📦 Installation

```bash
npm install toasticom
# or
yarn add toasticom
⚡ Usage

import { ToastProvider, toast } from "	toasticom";

function App() {

  #Default Toast
   
  showToast(){
  toast("success", "toast is displaying successfully")
  }

   #Custom Toast
   
  const triggerMinimalToast = () => {
  
    toast("info", "Clean & Minimal", {
      background: "#fff",
      color: "#333",
      border: "1px solid #e5e7eb",
      borderRadius: "6px",
      boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      fontSize: "0.875rem",
    });
    
  };

  return (
  
  #Global Usage
  
    <ToastProvider
      config={{
        duration: 4000, // Set Duration
        position: "top-right", // Set Position
        showCloseButton: true, // Handle Close Button
        
        // Custom Styles
        
        toastStyle: {  
          fontSize: "0.95rem",
          fontWeight: 500,
        },
      }}
    >
      <div>
        <button onClick={triggerMinimalToast}>Minimal Toast</button>
      </div>
    </ToastProvider>
  );
}



📄 License

MIT