import React from 'react';

function InstallButton() {
  const [isInstalled, setIsInstalled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      setIsInstalled(true);
    });
  }, []);

  const handleInstall = () => {
    if (!window.deferredPrompt) return;
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      window.deferredPrompt = null;
    });
  };

  if (!isInstalled) return null;

  return (
    <button onClick={handleInstall}>
      Install
    </button>
  );
}

export default InstallButton;
