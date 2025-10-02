// app.js — Multiple Choice with detailed per-option feedback
// Cards strictly use: prompt, options, answerIndex, explainCorrect, wrongNotes

const cards = [
  {
    prompt: "Which command opens the Programs and Features (uninstall/change programs) window?",
    options: ["appwiz.cpl", "inetcpl.cpl", "mmsys.cpl", "desk.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'appwiz.cpl' opens Programs and Features to uninstall or change programs.",
    wrongNotes: {
      "inetcpl.cpl": "opens Internet Options, not Programs and Features.",
      "mmsys.cpl": "opens Sound settings, not Programs and Features.",
      "desk.cpl": "opens Display settings, not Programs and Features."
    }
  },
  {
    prompt: "Which command opens the Recent items folder for the user?",
    options: ["shell:recent", "recent.cpl", "history.msc", "temp"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'shell:recent' is a shell shortcut that opens the user's Recent items.",
    wrongNotes: {
      "recent.cpl": "does not exist — use 'shell:recent'.",
      "history.msc": "is not a standard MMC.",
      "temp": "opens the Temp folder, not Recent."
    }
  },
  {
    prompt: "Which command opens the Character Map tool?",
    options: ["charmap", "char.cpl", "kbd.cpl", "osk"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'charmap' launches the Character Map application.",
    wrongNotes: {
      "char.cpl": "doesn't exist — use 'charmap'.",
      "kbd.cpl": "isn't a standard .cpl; try 'control keyboard' for keyboard settings.",
      "osk": "starts On-Screen Keyboard, not Character Map."
    }
  },
  {
    prompt: "Which tool cleans up unnecessary files like temp files and old Windows Update caches?",
    options: ["cleanmgr", "msconfig", "dfrgui", "winver"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'cleanmgr' opens Disk Cleanup.",
    wrongNotes: {
      "msconfig": "is for System Configuration (startup/services boot options), not Disk Cleanup.",
      "dfrgui": "is Defragment and Optimize Drives, not Disk Cleanup.",
      "winver": "shows the Windows version dialog, not cleanup."
    }
  },
  {
    prompt: "Which legacy command opens Advanced User Accounts (userpasswords2)?",
    options: ["control userpasswords2", "netplwiz", "lusrmgr.msc", "secpol.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'control userpasswords2' opens the classic Advanced User Accounts dialog.",
    wrongNotes: {
      "netplwiz": "opens a similar accounts dialog but is not the 'userpasswords2' alias.",
      "lusrmgr.msc": "opens Local Users and Groups (Pro/Enterprise), not the Control Panel dialog.",
      "secpol.msc": "opens Local Security Policy, not user accounts."
    }
  },
  {
    prompt: "Which command opens Disk Management?",
    options: ["diskmgmt.msc", "diskpart", "dfrgui", "devmgmt.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'diskmgmt.msc' opens the Disk Management MMC snap-in.",
    wrongNotes: {
      "diskpart": "is the command-line partitioning tool, not the MMC GUI.",
      "dfrgui": "opens Optimize Drives (defrag), not Disk Management.",
      "devmgmt.msc": "opens Device Manager, not Disk Management."
    }
  },
  {
    prompt: "Which command opens System Configuration (startup/services boot options)?",
    options: ["msconfig", "msinfo32", "sysdm.cpl", "services.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'msconfig' opens System Configuration.",
    wrongNotes: {
      "msinfo32": "opens System Information, not System Configuration.",
      "sysdm.cpl": "opens System Properties, not System Configuration.",
      "services.msc": "opens Services, not System Configuration."
    }
  },
  {
    prompt: "Which command opens Power Options (legacy Control Panel)?",
    options: ["powercfg.cpl", "powercfg.exe", "control.exe /name Microsoft.PowerOptions", "energy.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'powercfg.cpl' is the legacy Power Options applet in Control Panel.",
    wrongNotes: {
      "powercfg.exe": "is the command-line power configuration tool, not the Control Panel applet.",
      "control.exe /name Microsoft.PowerOptions": "opens the modern Power Options page; the question asks for the .cpl applet.",
      "energy.cpl": "doesn't exist — 'powercfg -energy' is a CLI report."
    }
  },
  {
    prompt: "Which command opens System Information (hardware, components, software environment)?",
    options: ["msinfo32", "dxdiag", "winver", "sysdm.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'msinfo32' opens the System Information tool.",
    wrongNotes: {
      "dxdiag": "opens the DirectX Diagnostic Tool, not System Information.",
      "winver": "opens the Windows version dialog, not System Information.",
      "sysdm.cpl": "opens System Properties, not System Information."
    }
  },
  {
    prompt: "Which command shows the Windows version dialog?",
    options: ["winver", "ver", "msinfo32", "about.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'winver' opens the About Windows dialog.",
    wrongNotes: {
      "ver": "prints the version in the console, not a GUI dialog.",
      "msinfo32": "opens System Information, not the simple version dialog.",
      "about.cpl": "doesn't exist as a standard applet."
    }
  },
  {
    prompt: "Which tool records steps to reproduce a problem (screenshots + notes)?",
    options: ["psr", "snippingtool", "stepsrec.cpl", "dxdiag"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'psr' launches Problem Steps Recorder.",
    wrongNotes: {
      "snippingtool": "captures screenshots, but doesn't auto-record steps.",
      "stepsrec.cpl": "doesn't exist — use 'psr'.",
      "dxdiag": "is DirectX Diagnostic, not a recorder."
    }
  },
  {
    prompt: "Which command opens Network Connections?",
    options: ["ncpa.cpl", "inetcpl.cpl", "netsh", "wf.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'ncpa.cpl' opens the classic Network Connections window.",
    wrongNotes: {
      "inetcpl.cpl": "opens Internet Options, not Network Connections.",
      "netsh": "is the command-line network shell, not the GUI connections window.",
      "wf.msc": "opens Windows Defender Firewall with Advanced Security, not Network Connections."
    }
  },
  {
    prompt: "Which command opens the Date and Time settings?",
    options: ["region.cpl", "inetcpl.cpl", "timedate.cpl", "mmsys.cpl"],
    answerIndex: 2,
    explainCorrect: "Correct ✅ — 'timedate.cpl' opens the Date and Time control.",
    wrongNotes: {
      "region.cpl": "opens Region settings (formats, location), not Date and Time.",
      "inetcpl.cpl": "opens Internet Options, not Date and Time.",
      "mmsys.cpl": "opens Sound settings, not Date and Time."
    }
  },
  {
    prompt: "Which command opens the classic System Properties dialog?",
    options: ["sysdm.cpl", "msinfo32", "winver", "control.exe /name Microsoft.System"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'sysdm.cpl' opens System Properties.",
    wrongNotes: {
      "msinfo32": "opens System Information, not System Properties.",
      "winver": "opens the version dialog, not System Properties.",
      "control.exe /name Microsoft.System": "opens the modern System page; the question asks for the classic .cpl."
    }
  },
  {
    prompt: "Which command opens the Defragment and Optimize Drives utility?",
    options: ["dfrgui", "defrag.cpl", "diskmgmt.msc", "cleanmgr"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'dfrgui' opens Optimize Drives.",
    wrongNotes: {
      "defrag.cpl": "doesn't exist — use 'dfrgui' or 'defrag' (CLI).",
      "diskmgmt.msc": "opens Disk Management, not the defragmenter.",
      "cleanmgr": "opens Disk Cleanup, not the defragmenter."
    }
  },
  {
    prompt: "Which command opens the Services console?",
    options: ["services.msc", "taskschd.msc", "eventvwr.msc", "msconfig"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'services.msc' opens the Services MMC.",
    wrongNotes: {
      "taskschd.msc": "opens Task Scheduler, not Services.",
      "eventvwr.msc": "opens Event Viewer, not Services.",
      "msconfig": "opens System Configuration, not the Services console."
    }
  },
  {
    prompt: "Which command enables the built-in Administrator account?",
    options: ["net user administrator /active:yes", "net users administrator /active:yes", "lusrmgr.msc /enable admin", "runas /user:administrator enable"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'net user administrator /active:yes' enables the built-in Administrator account.",
    wrongNotes: {
      "net users administrator /active:yes": "uses incorrect syntax — it's 'net user' (singular).",
      "lusrmgr.msc /enable admin": "isn't a valid switch for lusrmgr.msc.",
      "runas /user:administrator enable": "starts a process under a user; it doesn't enable accounts."
    }
  },
  {
    prompt: "Which command disables the built-in Administrator account again?",
    options: ["net user administrator /active:no", "net users administrator /active:no", "disable-admin.msc", "secedit /disable admin"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'net user administrator /active:no' disables the built-in Administrator account.",
    wrongNotes: {
      "net users administrator /active:no": "uses incorrect syntax — 'user' is singular.",
      "disable-admin.msc": "doesn't exist.",
      "secedit /disable admin": "is not a valid secedit usage for this task."
    }
  },
  {
    prompt: "What does 'netstat -ano | findstr \"ESTABLISHED\"' show?",
    options: [
      "Only established TCP connections with their PIDs",
      "All listening ports (TCP/UDP) without PIDs",
      "Firewall rules currently enabled",
      "Wi‑Fi signal strength history"
    ],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — It filters 'netstat -ano' to only ESTABLISHED connections and includes the owning process ID.",
    wrongNotes: {
      "All listening ports (TCP/UDP) without PIDs": "is closer to 'netstat -an | findstr LISTENING'. '-o' adds PIDs.",
      "Firewall rules currently enabled": "should be viewed with 'netsh advfirewall' or the MMC, not netstat.",
      "Wi‑Fi signal strength history": "is not something netstat reports."
    }
  },
  {
    prompt: "Which command opens Display settings (legacy Control Panel)?",
    options: ["desk.cpl", "display.cpl", "dccw", "mmsys.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'desk.cpl' opens classic Display settings.",
    wrongNotes: {
      "display.cpl": "isn't a standard .cpl; use 'desk.cpl'.",
      "dccw": "runs Display Color Calibration Wizard, not Display settings.",
      "mmsys.cpl": "opens Sound settings, not Display."
    }
  },
  {
    prompt: "Which command opens Internet Options?",
    options: ["inetcpl.cpl", "ncpa.cpl", "wf.msc", "inetcpl.exe"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'inetcpl.cpl' opens Internet Options.",
    wrongNotes: {
      "ncpa.cpl": "opens Network Connections, not Internet Options.",
      "wf.msc": "opens Firewall with Advanced Security, not Internet Options.",
      "inetcpl.exe": "Internet Options is a .cpl module, not a standalone .exe."
    }
  },
  {
    prompt: "Which command opens Game Controllers settings?",
    options: ["joy.cpl", "game.cpl", "xinput.cpl", "main.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'joy.cpl' opens Game Controllers.",
    wrongNotes: {
      "game.cpl": "doesn't exist as a standard applet.",
      "xinput.cpl": "doesn't exist; XInput is an API.",
      "main.cpl": "opens Mouse Properties, not Game Controllers."
    }
  },
  {
    prompt: "Which command opens Mouse Properties?",
    options: ["main.cpl", "mouse.cpl", "pointer.cpl", "intl.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'main.cpl' opens Mouse Properties.",
    wrongNotes: {
      "mouse.cpl": "isn't the canonical name; 'main.cpl' is the mouse applet.",
      "pointer.cpl": "doesn't exist.",
      "intl.cpl": "opens Region settings, not Mouse."
    }
  },
  {
    prompt: "Which command opens the Printers folder?",
    options: ["control printers", "printui.cpl", "printers.msc", "devices.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'control printers' opens the classic Printers/Devices and Printers folder.",
    wrongNotes: {
      "printui.cpl": "is not a standard applet; printer UI tasks use 'printui.dll,PrintUIEntry' with rundll32.",
      "printers.msc": "doesn't exist.",
      "devices.cpl": "doesn't exist; use 'control printers' or modern Settings."
    }
  },
  {
    prompt: "Which command opens Region settings (formats, location)?",
    options: ["intl.cpl", "region.cpl", "timezone.cpl", "lang.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'intl.cpl' opens Region settings.",
    wrongNotes: {
      "region.cpl": "isn't the standard name; the canonical applet is 'intl.cpl'.",
      "timezone.cpl": "doesn't exist; Date/Time is 'timedate.cpl'.",
      "lang.cpl": "doesn't exist; language moved to modern Settings."
    }
  },
  {
    prompt: "Which command directly opens the 'Change product key' UI in Settings?",
    options: ["changepk", "slui 3", "slmgr /ipk", "cleanmgr"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'changepk' (changepk.exe) launches the Change product key UI in Settings.",
    wrongNotes: {
      "slui 3": "opens the classic Windows Activation dialog to enter a key, not the Settings UI.",
      "slmgr /ipk": "installs a product key from the command line; it doesn't open the Settings UI.",
      "cleanmgr": "is Disk Cleanup — unrelated to activation."
    }
  },
  {
    prompt: "Which command opens 'Set Program Access and Computer Defaults' (Default Programs)?",
    options: ["computerdefaults", "defaultprograms.cpl", "control printers", "assoc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'computerdefaults' opens the legacy Default Programs selector.",
    wrongNotes: {
      "defaultprograms.cpl": "doesn't exist — use 'computerdefaults' or modern Settings.",
      "control printers": "opens Printers/Devices, not Default Programs.",
      "assoc": "is the CLI for file associations, not the Default Programs UI."
    }
  },
  {
    prompt: "Which command opens the Keyboard Properties dialog?",
    options: ["control keyboard", "main.cpl keyboard", "kbd.cpl", "main.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'control keyboard' opens the Keyboard Properties dialog.",
    wrongNotes: {
      "main.cpl keyboard": "isn't a standard Run command. 'main.cpl' is Mouse; Keyboard is 'control keyboard'.",
      "kbd.cpl": "isn't a standard .cpl; use 'control keyboard'.",
      "main.cpl": "opens Mouse Properties, not Keyboard."
    }
  },
  {
    prompt: "Which command opens Device Manager?",
    options: ["devmgmt.msc", "diskmgmt.msc", "compmgmt.msc", "msinfo32"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'devmgmt.msc' opens Device Manager.",
    wrongNotes: {
      "diskmgmt.msc": "opens Disk Management, not Device Manager.",
      "compmgmt.msc": "opens Computer Management (which includes Device Manager), but not directly Device Manager.",
      "msinfo32": "opens System Information, not Device Manager."
    }
  },
  {
    prompt: "Which command opens the Group Policy Editor?",
    options: ["gpedit.msc", "secpol.msc", "lusrmgr.msc", "services.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'gpedit.msc' opens the Local Group Policy Editor (Windows Pro/Enterprise).",
    wrongNotes: {
      "secpol.msc": "opens Local Security Policy, not Group Policy.",
      "lusrmgr.msc": "opens Local Users and Groups, not Group Policy.",
      "services.msc": "opens the Services console, not Group Policy."
    }
  },
  {
    prompt: "Which command opens Local Security Policy?",
    options: ["secpol.msc", "gpedit.msc", "wf.msc", "compmgmt.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'secpol.msc' opens Local Security Policy.",
    wrongNotes: {
      "gpedit.msc": "opens Group Policy Editor, not Local Security Policy.",
      "wf.msc": "opens Windows Defender Firewall with Advanced Security, not Local Security Policy.",
      "compmgmt.msc": "opens Computer Management, not Local Security Policy."
    }
  },
  {
    prompt: "Which command opens Computer Management?",
    options: ["compmgmt.msc", "devmgmt.msc", "diskmgmt.msc", "eventvwr.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'compmgmt.msc' opens Computer Management.",
    wrongNotes: {
      "devmgmt.msc": "opens Device Manager, not Computer Management.",
      "diskmgmt.msc": "opens Disk Management, not Computer Management.",
      "eventvwr.msc": "opens Event Viewer, not Computer Management."
    }
  },
  {
    prompt: "Which command opens Event Viewer?",
    options: ["eventvwr.msc", "taskschd.msc", "perfmon", "resmon"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'eventvwr.msc' opens Event Viewer.",
    wrongNotes: {
      "taskschd.msc": "opens Task Scheduler, not Event Viewer.",
      "perfmon": "opens Performance Monitor, not Event Viewer.",
      "resmon": "opens Resource Monitor, not Event Viewer."
    }
  },
  {
    prompt: "Which command opens Task Scheduler?",
    options: ["taskschd.msc", "services.msc", "eventvwr.msc", "msconfig"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'taskschd.msc' opens Task Scheduler.",
    wrongNotes: {
      "services.msc": "opens Services, not Task Scheduler.",
      "eventvwr.msc": "opens Event Viewer, not Task Scheduler.",
      "msconfig": "opens System Configuration, not Task Scheduler."
    }
  },
  {
    prompt: "Which command opens Performance Monitor?",
    options: ["perfmon", "resmon", "msinfo32", "dxdiag"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'perfmon' opens Performance Monitor.",
    wrongNotes: {
      "resmon": "opens Resource Monitor, not Performance Monitor.",
      "msinfo32": "opens System Information, not Performance Monitor.",
      "dxdiag": "opens DirectX Diagnostic Tool, not Performance Monitor."
    }
  },
  {
    prompt: "Which command opens Resource Monitor?",
    options: ["resmon", "perfmon", "taskmgr", "msconfig"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'resmon' opens Resource Monitor.",
    wrongNotes: {
      "perfmon": "opens Performance Monitor, not Resource Monitor.",
      "taskmgr": "opens Task Manager, not Resource Monitor.",
      "msconfig": "opens System Configuration, not Resource Monitor."
    }
  },
  {
    prompt: "Which command opens the Registry Editor?",
    options: ["regedit", "regedt32", "gpedit.msc", "secpol.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'regedit' opens the Registry Editor.",
    wrongNotes: {
      "regedt32": "historically distinct but now redirects to regedit; 'regedit' is the canonical command.",
      "gpedit.msc": "opens Group Policy Editor, not the Registry.",
      "secpol.msc": "opens Local Security Policy, not the Registry."
    }
  },
  {
    prompt: "Which command opens Windows Defender Firewall with Advanced Security?",
    options: ["wf.msc", "inetcpl.cpl", "ncpa.cpl", "control firewall.cpl"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'wf.msc' opens Firewall with Advanced Security.",
    wrongNotes: {
      "inetcpl.cpl": "opens Internet Options, not the advanced firewall console.",
      "ncpa.cpl": "opens Network Connections, not the firewall console.",
      "control firewall.cpl": "opens basic Firewall settings, not the Advanced Security MMC."
    }
  },
  {
    prompt: "Which command opens Windows Features (Turn Windows features on or off)?",
    options: ["optionalfeatures", "appwiz.cpl", "programsfeatures.msc", "msconfig"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'optionalfeatures' opens Windows Features.",
    wrongNotes: {
      "appwiz.cpl": "opens Programs and Features (uninstall/change), not Windows Features.",
      "programsfeatures.msc": "does not exist; use 'optionalfeatures'.",
      "msconfig": "opens System Configuration, not Windows Features."
    }
  },
  {
    prompt: "Which command launches System Restore (Restore wizard)?",
    options: ["rstrui", "sysdm.cpl", "msconfig", "eventvwr.msc"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'rstrui' launches the System Restore wizard.",
    wrongNotes: {
      "sysdm.cpl": "opens System Properties; System Restore is accessed there but 'rstrui' opens the wizard directly.",
      "msconfig": "opens System Configuration, not the Restore wizard.",
      "eventvwr.msc": "opens Event Viewer, not System Restore."
    }
  },
  {
    prompt: "Which command opens the Advanced tab of System Properties?",
    options: ["SystemPropertiesAdvanced", "sysdm.cpl", "msinfo32", "control.exe /name Microsoft.System"],
    answerIndex: 0,
    explainCorrect: "Correct ✅ — 'SystemPropertiesAdvanced' jumps straight to the Advanced tab.",
    wrongNotes: {
      "sysdm.cpl": "opens System Properties (default tab), not directly Advanced.",
      "msinfo32": "opens System Information, not System Properties.",
      "control.exe /name Microsoft.System": "opens the modern System page, not the classic Advanced tab."
    }
  },
  {
  prompt: "Which command opens Task Manager directly?",
  options: ["taskmgr", "resmon", "perfmon", "msconfig"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'taskmgr' launches Task Manager.",
  wrongNotes: {
    "resmon": "opens Resource Monitor, not Task Manager.",
    "perfmon": "opens Performance Monitor, not Task Manager.",
    "msconfig": "opens System Configuration, not Task Manager."
  }
},
{
  prompt: "Which command opens Notepad?",
  options: ["notepad", "write", "wordpad", "winword"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'notepad' opens the Notepad text editor.",
  wrongNotes: {
    "write": "opens WordPad, not Notepad.",
    "wordpad": "is an alias for WordPad, not Notepad.",
    "winword": "starts Microsoft Word, not Notepad."
  }
},
{
  prompt: "Which command opens Paint?",
  options: ["mspaint", "paint", "pbrush", "paint3d"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'mspaint' launches Microsoft Paint.",
  wrongNotes: {
    "paint": "is not a valid command; use 'mspaint'.",
    "pbrush": "was the old alias for Paint in Windows 9x, not current.",
    "paint3d": "is a different app (Paint 3D), not classic Paint."
  }
},
{
  prompt: "Which command opens Calculator?",
  options: ["calc", "winver", "msconfig", "control.exe /name Microsoft.Calculator"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'calc' opens the Calculator application.",
  wrongNotes: {
    "winver": "shows Windows version, not Calculator.",
    "msconfig": "opens System Configuration, not Calculator.",
    "control.exe /name Microsoft.Calculator": "is not a valid Control Panel verb."
  }
},
{
  prompt: "Which command opens Command Prompt?",
  options: ["cmd", "powershell", "wt", "bash"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'cmd' opens Command Prompt.",
  wrongNotes: {
    "powershell": "opens Windows PowerShell, not Command Prompt.",
    "wt": "opens Windows Terminal, not plain Command Prompt.",
    "bash": "opens WSL (if installed), not Command Prompt."
  }
},
{
  prompt: "Which command opens Windows PowerShell?",
  options: ["powershell", "cmd", "pwsh", "ps"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'powershell' opens Windows PowerShell.",
  wrongNotes: {
    "cmd": "opens Command Prompt, not PowerShell.",
    "pwsh": "opens PowerShell Core (if installed), not Windows PowerShell.",
    "ps": "is not a recognized Run command; it's used inside shells like Unix."
  }
},
{
  prompt: "Which command opens Windows Terminal?",
  options: ["wt", "powershell", "cmd", "terminal"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'wt' opens Windows Terminal (if installed).",
  wrongNotes: {
    "powershell": "opens PowerShell, not Windows Terminal.",
    "cmd": "opens Command Prompt, not Windows Terminal.",
    "terminal": "is not the proper shortcut — use 'wt'."
  }
},
{
  prompt: "Which command opens File Explorer?",
  options: ["explorer", "iexplore", "files", "control folders"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'explorer' opens File Explorer.",
  wrongNotes: {
    "iexplore": "starts Internet Explorer (legacy), not File Explorer.",
    "files": "is not a valid command.",
    "control folders": "opens Folder Options, not File Explorer."
  }
},
{
  prompt: "Which command opens Registry Editor?",
  options: ["regedit", "gpedit.msc", "secpol.msc", "msconfig"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'regedit' opens the Registry Editor.",
  wrongNotes: {
    "gpedit.msc": "opens Group Policy Editor, not the Registry.",
    "secpol.msc": "opens Local Security Policy, not the Registry.",
    "msconfig": "opens System Configuration, not the Registry."
  }
},
{
  prompt: "Which command opens Control Panel (classic view)?",
  options: ["control", "settings", "compmgmt.msc", "msconfig"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'control' opens the classic Control Panel.",
  wrongNotes: {
    "settings": "opens the modern Settings app, not classic Control Panel.",
    "compmgmt.msc": "opens Computer Management, not Control Panel.",
    "msconfig": "opens System Configuration, not Control Panel."
  }
},
{
  prompt: "Which command lists all saved Wi-Fi profiles on the system?",
  options: ["netsh wlan show profiles", "ipconfig /all", "netstat -ano", "arp -a"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'netsh wlan show profiles' shows all saved Wi-Fi (SSID) profiles.",
  wrongNotes: {
    "ipconfig /all": "shows adapter configuration and IP details, not saved Wi-Fi profiles.",
    "netstat -ano": "shows TCP/UDP connections and listening ports, not Wi-Fi profiles.",
    "arp -a": "shows the ARP cache (MAC↔IP table), not Wi-Fi profiles."
  }
},
{
  prompt: "Which command shows details (including the password if requested) for a specific Wi-Fi profile?",
  options: [
    "netsh wlan show profile name=\"SSID\" key=clear",
    "netsh wlan show profiles",
    "ipconfig /displaydns",
    "net user SSID /active:yes"
  ],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'netsh wlan show profile name=\"SSID\" key=clear' shows Wi-Fi profile details including the key (password).",
  wrongNotes: {
    "netsh wlan show profiles": "lists all profiles, but doesn’t show password details.",
    "ipconfig /displaydns": "shows cached DNS entries, not Wi-Fi profiles.",
    "net user SSID /active:yes": "is for enabling local user accounts, not Wi-Fi profiles."
  }
},
{
  prompt: "Which command exports a Wi-Fi profile (SSID) to XML for backup?",
  options: [
    "netsh wlan export profile name=\"SSID\" folder=C:\\\\backup key=clear",
    "netsh wlan save profile SSID",
    "netsh wlan show profiles",
    "copy %wifi%"
  ],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'netsh wlan export profile name=\"SSID\" folder=C:\\backup key=clear' saves the profile (with key if requested).",
  wrongNotes: {
    "netsh wlan save profile SSID": "not a valid command; use 'export profile'.",
    "netsh wlan show profiles": "lists profiles but doesn’t export them.",
    "copy %wifi%": "is not a valid command."
  }
},
{
  prompt: "Which command deletes one saved Wi-Fi profile?",
  options: [
    "netsh wlan delete profile name=\"SSID\"",
    "netsh wlan clear profiles",
    "ipconfig /release SSID",
    "del SSID"
  ],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'netsh wlan delete profile name=\"SSID\"' removes that specific Wi-Fi profile.",
  wrongNotes: {
    "netsh wlan clear profiles": "not valid; use 'delete profile'.",
    "ipconfig /release SSID": "releases IP configuration, not Wi-Fi profiles.",
    "del SSID": "is a file command, not networking."
  }
},
{
  prompt: "Which command deletes ALL saved Wi-Fi profiles at once?",
  options: [
    "netsh wlan delete profile name=* i=*",
    "netsh wlan clear all",
    "ipconfig /flushdns",
    "net user delete wifi"
  ],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'netsh wlan delete profile name=* i=*' deletes all saved Wi-Fi profiles.",
  wrongNotes: {
    "netsh wlan clear all": "not valid syntax.",
    "ipconfig /flushdns": "clears DNS cache, not Wi-Fi profiles.",
    "net user delete wifi": "is for local user accounts, not Wi-Fi profiles."
  }
},
{
  prompt: "Which command opens Remote Desktop Connection?",
  options: ["mstsc", "msra", "rdc", "ssh"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'mstsc' launches the Remote Desktop Connection client.",
  wrongNotes: {
    "msra": "opens Windows Remote Assistance, not Remote Desktop.",
    "rdc": "is not a valid Run command; the client is 'mstsc'.",
    "ssh": "opens an SSH client (if installed), not Remote Desktop."
  }
},
{
  prompt: "Which command opens Windows Remote Assistance?",
  options: ["msra", "mstsc", "quickassist", "help"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'msra' opens Windows Remote Assistance.",
  wrongNotes: {
    "mstsc": "opens Remote Desktop Connection, not Remote Assistance.",
    "quickassist": "is a separate app for remote help, not msra.",
    "help": "is a legacy command for Help, not Remote Assistance."
  }
},
{
  prompt: "Which command opens the Certificates MMC for the current user?",
  options: ["certmgr.msc", "secpol.msc", "gpedit.msc", "certlm.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'certmgr.msc' opens the Certificates snap-in for the current user.",
  wrongNotes: {
    "secpol.msc": "opens Local Security Policy, not certificates.",
    "gpedit.msc": "opens Group Policy Editor, not certificates.",
    "certlm.msc": "opens certificates for the Local Machine, not current user."
  }
},
{
  prompt: "Which command opens the Certificates MMC for the Local Computer?",
  options: ["certlm.msc", "certmgr.msc", "secpol.msc", "compmgmt.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'certlm.msc' opens Certificates (Local Computer).",
  wrongNotes: {
    "certmgr.msc": "is for Current User certificates.",
    "secpol.msc": "is for Local Security Policy, not certificates.",
    "compmgmt.msc": "opens Computer Management, not certificates."
  }
},
{
  prompt: "Which command runs DirectX Diagnostic Tool?",
  options: ["dxdiag", "msinfo32", "perfmon", "winver"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'dxdiag' launches the DirectX Diagnostic Tool.",
  wrongNotes: {
    "msinfo32": "opens System Information, not DirectX diagnostics.",
    "perfmon": "opens Performance Monitor, not DirectX diagnostics.",
    "winver": "shows Windows version, not DirectX diagnostics."
  }
},
{
  prompt: "Which command starts Magnifier?",
  options: ["magnify", "zoom", "lens", "loupe"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'magnify' launches the Magnifier accessibility tool.",
  wrongNotes: {
    "zoom": "is not a valid Windows command.",
    "lens": "is not a valid Run command.",
    "loupe": "is not a valid Windows command."
  }
},
{
  prompt: "Which command launches the On-Screen Keyboard?",
  options: ["osk", "kbd", "keyboard", "screenkbd"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'osk' starts the On-Screen Keyboard.",
  wrongNotes: {
    "kbd": "is not a standard Windows command.",
    "keyboard": "is not a valid Run command.",
    "screenkbd": "is not a recognized command."
  }
},
{
  prompt: "Which command starts Narrator (screen reader)?",
  options: ["narrator", "speech", "voice", "talkback"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'narrator' launches the Windows Narrator screen reader.",
  wrongNotes: {
    "speech": "is not a valid Run command.",
    "voice": "is not a valid Run command.",
    "talkback": "is an Android feature, not Windows."
  }
},
{
  prompt: "Which command forces a Group Policy refresh immediately?",
  options: ["gpupdate /force", "gpresult /r", "secpol.msc", "gpedit.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'gpupdate /force' refreshes computer and user policies right away.",
  wrongNotes: {
    "gpresult /r": "Displays resultant policy info, but doesn’t refresh it.",
    "secpol.msc": "Opens Local Security Policy, not a refresh.",
    "gpedit.msc": "Opens the editor; it doesn’t trigger an update."
  }
},
{
  prompt: "Which command shows the effective Group Policy settings for the current user/computer?",
  options: ["gpresult /r", "gpupdate /force", "gpmc.msc", "secpol.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'gpresult /r' reports the Resultant Set of Policy (RSoP).",
  wrongNotes: {
    "gpupdate /force": "Refreshes policy; it doesn’t report it.",
    "gpmc.msc": "Opens Group Policy Management Console (requires RSAT), not a local report.",
    "secpol.msc": "Local Security Policy editor, not an RSoP report."
  }
},
{
  prompt: "Which command opens Shared Folders management directly (sessions, open files, shares)?",
  options: ["fsmgmt.msc", "compmgmt.msc", "services.msc", "lusrmgr.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'fsmgmt.msc' opens the Shared Folders MMC snap-in.",
  wrongNotes: {
    "compmgmt.msc": "Computer Management includes Shared Folders, but this doesn’t open it directly.",
    "services.msc": "Opens Services, not Shared Folders.",
    "lusrmgr.msc": "Opens Local Users and Groups, not Shared Folders."
  }
},
{
  prompt: "Which command opens Print Management (printers, drivers, queues) on supported editions?",
  options: ["printmanagement.msc", "control printers", "spoolsv.msc", "printui.cpl"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'printmanagement.msc' opens the Print Management console.",
  wrongNotes: {
    "control printers": "Opens Devices and Printers, not the management console.",
    "spoolsv.msc": "Not a console; spoolsv.exe is the print spooler service binary.",
    "printui.cpl": "Not a standard .cpl; admin tasks use printui.dll via rundll32."
  }
},
{
  prompt: "Which tool opens the basic Windows Firewall Control Panel page?",
  options: ["control firewall.cpl", "wf.msc", "inetcpl.cpl", "ncpa.cpl"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'control firewall.cpl' opens the basic Firewall settings page.",
  wrongNotes: {
    "wf.msc": "Opens Firewall with Advanced Security (advanced MMC), not the basic page.",
    "inetcpl.cpl": "Internet Options, not Firewall.",
    "ncpa.cpl": "Network Connections, not Firewall."
  }
},
{
  prompt: "Which command line shows full IP configuration including DNS and MAC addresses?",
  options: ["ipconfig /all", "ipconfig", "arp -a", "route print"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'ipconfig /all' shows detailed adapter configuration.",
  wrongNotes: {
    "ipconfig": "Shows basic info; '/all' is needed for full details.",
    "arp -a": "Shows ARP cache, not IP configuration.",
    "route print": "Shows routing table, not adapter configuration."
  }
},
{
  prompt: "Which command clears the local DNS resolver cache?",
  options: ["ipconfig /flushdns", "ipconfig /release", "nslookup /flush", "dnscmd /clearcache"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'ipconfig /flushdns' clears the resolver cache.",
  wrongNotes: {
    "ipconfig /release": "Releases DHCP leases, doesn’t clear DNS cache.",
    "nslookup /flush": "Not a valid nslookup switch.",
    "dnscmd /clearcache": "Clears DNS server cache (RSAT), not the client resolver."
  }
},
{
  prompt: "Which tool queries DNS records interactively from the client?",
  options: ["nslookup", "dnscmd", "ipconfig /displaydns", "route print"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'nslookup' is the interactive DNS query tool.",
  wrongNotes: {
    "dnscmd": "Admin tool for DNS servers (RSAT), not the client query utility.",
    "ipconfig /displaydns": "Shows local DNS cache; it doesn’t query records by name server.",
    "route print": "Displays the routing table, not DNS."
  }
},
{
  prompt: "Which command tests reachability and latency hop-by-hop to a host?",
  options: ["tracert hostname", "ping -t hostname", "pathping /n", "route add"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'tracert' traces the path through routers to a destination.",
  wrongNotes: {
    "ping -t hostname": "Pings continuously but doesn’t show the route.",
    "pathping /n": "Combines ping + tracert style analysis but takes longer; 'tracert' is the classic hop-by-hop.",
    "route add": "Modifies routes; it doesn’t test reachability."
  }
},
{
  prompt: "Which tool repairs system files using Windows resource protection?",
  options: ["sfc /scannow", "dism /online /cleanup-image /restorehealth", "chkdsk /f", "repair.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'sfc /scannow' scans and repairs protected system files.",
  wrongNotes: {
    "dism /online /cleanup-image /restorehealth": "Repairs the component store; SFC repairs protected system files.",
    "chkdsk /f": "Repairs disk/NTFS issues, not system files.",
    "repair.msc": "No such console."
  }
},
{
  prompt: "Which command repairs the Windows component store (servicing stack) online?",
  options: [
    "dism /online /cleanup-image /restorehealth",
    "sfc /scannow",
    "chkdsk /r",
    "wbadmin start recovery"
  ],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — DISM with '/restorehealth' fixes the servicing/component store.",
  wrongNotes: {
    "sfc /scannow": "Repairs protected system files, not the component store.",
    "chkdsk /r": "Scans disk surface for bad sectors; unrelated to component store.",
    "wbadmin start recovery": "Starts Windows Backup recovery, not image servicing."
  }
},
{
  prompt: "Which command-line tool manages disk partitions interactively?",
  options: ["diskpart", "diskmgmt.msc", "fsutil", "devmgmt.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'diskpart' is the CLI for disk/volume/partition management.",
  wrongNotes: {
    "diskmgmt.msc": "GUI MMC for Disk Management, not the CLI.",
    "fsutil": "Advanced file system utility; not primarily partitions.",
    "devmgmt.msc": "Device Manager, not partitioning."
  }
},
{
  prompt: "Which command schedules tasks from the command line?",
  options: ["schtasks", "taskschd.msc", "tasklist", "at"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'schtasks' creates, deletes, and manages scheduled tasks via CLI.",
  wrongNotes: {
    "taskschd.msc": "Opens the Task Scheduler GUI, not the CLI tool.",
    "tasklist": "Lists processes; doesn’t schedule tasks.",
    "at": "Legacy and deprecated; use 'schtasks' instead."
  }
},
{
  prompt: "Which command lists running processes and their services associations?",
  options: ["tasklist /svc", "tasklist", "sc query", "services.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'tasklist /svc' maps processes to hosted services.",
  wrongNotes: {
    "tasklist": "Lists processes but omits hosted services mapping.",
    "sc query": "Queries services but isn’t a process list.",
    "services.msc": "GUI for services; it doesn’t list processes."
  }
},
{
  prompt: "Which command ends a process by PID from the command line?",
  options: ["taskkill /PID <id> /F", "tasklist /fi \"pid eq <id>\"", "sc stop <service>", "wmic process terminate"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'taskkill /PID <id> /F' forcibly terminates a process by PID.",
  wrongNotes: {
    "tasklist /fi \"pid eq <id>\"": "Filters the list; it doesn’t terminate.",
    "sc stop <service>": "Stops a service, not an arbitrary process.",
    "wmic process terminate": "WMIC is deprecated; 'taskkill' is the standard."
  }
},
{
  prompt: "Which command reboots the machine immediately from the command line?",
  options: ["shutdown /r /t 0", "restart /now", "shutdown /s /t 0", "powercfg /reboot"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'shutdown /r /t 0' restarts the system right away.",
  wrongNotes: {
    "restart /now": "Not a valid Windows command.",
    "shutdown /s /t 0": "Shuts down (power off), doesn’t reboot.",
    "powercfg /reboot": "Not a valid switch."
  }
},
{
  prompt: "Which command shows the computer name of the current system?",
  options: ["hostname", "whoami", "systeminfo", "set COMPUTERNAME"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'hostname' prints the local computer name.",
  wrongNotes: {
    "whoami": "Shows the current user/security context, not the computer name.",
    "systeminfo": "Displays detailed system info; it’s overkill to just print the name.",
    "set COMPUTERNAME": "Shows/sets env var in cmd context; 'hostname' is the standard."
  }
},
{
  prompt: "Which command prints the current user and domain context?",
  options: ["whoami", "hostname", "net user", "echo %USERNAME%"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'whoami' shows the current user (and domain).",
  wrongNotes: {
    "hostname": "Shows machine name, not user context.",
    "net user": "Lists local users; doesn’t show the signed-in context.",
    "echo %USERNAME%": "Shows username only, not the domain or UPN."
  }
},
{
  prompt: "Which command displays comprehensive system details including BIOS, build, and hotfixes?",
  options: ["systeminfo", "msinfo32", "winver", "dxdiag"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'systeminfo' prints detailed system info in the console.",
  wrongNotes: {
    "msinfo32": "GUI System Information tool; the question asks for CLI output.",
    "winver": "Version dialog, not detailed system info.",
    "dxdiag": "DirectX diagnostics, not general system info."
  }
},
{
  prompt: "Which command opens Active Directory Users and Computers (requires RSAT/Server)?",
  options: ["dsa.msc", "dsac.exe", "gpmc.msc", "adsiedit.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'dsa.msc' launches AD Users and Computers.",
  wrongNotes: {
    "dsac.exe": "Opens AD Administrative Center, not ADUC.",
    "gpmc.msc": "Opens Group Policy Management Console, not ADUC.",
    "adsiedit.msc": "Opens ADSI Edit (low-level directory editor)."
  }
},
{
  prompt: "Which command opens Active Directory Administrative Center?",
  options: ["dsac.exe", "dsa.msc", "adsiedit.msc", "domain.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'dsac.exe' opens AD Administrative Center.",
  wrongNotes: {
    "dsa.msc": "AD Users and Computers, not ADAC.",
    "adsiedit.msc": "ADSI Edit, not ADAC.",
    "domain.msc": "AD Domains and Trusts, not ADAC."
  }
},
{
  prompt: "Which command opens Active Directory Sites and Services?",
  options: ["dssite.msc", "dsa.msc", "gpmc.msc", "adsiedit.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'dssite.msc' opens AD Sites and Services.",
  wrongNotes: {
    "dsa.msc": "AD Users and Computers, not Sites and Services.",
    "gpmc.msc": "Group Policy Management Console, not Sites and Services.",
    "adsiedit.msc": "ADSI Edit; different purpose."
  }
},
{
  prompt: "Which command opens Active Directory Domains and Trusts?",
  options: ["domain.msc", "dsa.msc", "dssite.msc", "gpmc.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'domain.msc' launches AD Domains and Trusts.",
  wrongNotes: {
    "dsa.msc": "ADUC, not Domains and Trusts.",
    "dssite.msc": "AD Sites and Services, not Domains and Trusts.",
    "gpmc.msc": "Group Policy Management Console, not Domains and Trusts."
  }
},
{
  prompt: "Which console opens Group Policy Management (domain GPOs) when RSAT/Server tools are installed?",
  options: ["gpmc.msc", "gpedit.msc", "secpol.msc", "gpupdate /force"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'gpmc.msc' opens Group Policy Management Console for domain GPOs.",
  wrongNotes: {
    "gpedit.msc": "Local Group Policy Editor; not domain GPO management.",
    "secpol.msc": "Local Security Policy, not GPMC.",
    "gpupdate /force": "Forces a refresh; doesn’t open a console."
  }
},
{
  prompt: "Which command opens DNS Manager on a server or with RSAT installed?",
  options: ["dnsmgmt.msc", "dnscmd", "ipconfig /displaydns", "nslookup"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'dnsmgmt.msc' opens the DNS Management console.",
  wrongNotes: {
    "dnscmd": "CLI to manage DNS servers; not the GUI console.",
    "ipconfig /displaydns": "Displays local DNS cache only.",
    "nslookup": "Queries DNS records; not a management console."
  }
},
{
  prompt: "Which command opens DHCP Manager (on server/with RSAT)?",
  options: ["dhcpmgmt.msc", "ncpa.cpl", "ipconfig /renew", "services.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'dhcpmgmt.msc' opens the DHCP Management console.",
  wrongNotes: {
    "ncpa.cpl": "Opens Network Connections, not DHCP management.",
    "ipconfig /renew": "Renews DHCP lease on the client; not a management console.",
    "services.msc": "Services console; DHCP Server appears there but not as a management UI."
  }
},
{
  prompt: "Which command opens ADSI Edit (low-level Active Directory editor)?",
  options: ["adsiedit.msc", "dsa.msc", "dsac.exe", "dssite.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'adsiedit.msc' opens ADSI Edit.",
  wrongNotes: {
    "dsa.msc": "ADUC, not ADSI Edit.",
    "dsac.exe": "AD Administrative Center, not ADSI Edit.",
    "dssite.msc": "AD Sites and Services."
  }
},
{
  prompt: "Which command opens Hyper-V Manager (where supported and installed)?",
  options: ["virtmgmt.msc", "vmms.msc", "hyperv.msc", "vmconnect"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'virtmgmt.msc' opens Hyper-V Manager.",
  wrongNotes: {
    "vmms.msc": "Not a console; VMMS is the Hyper-V Virtual Machine Management Service.",
    "hyperv.msc": "Not a valid console name; use 'virtmgmt.msc'.",
    "vmconnect": "Connects to a VM console, but is not the manager."
  }
},
{
  prompt: "Which command opens Failover Cluster Manager (where the feature is installed)?",
  options: ["cluadmin.msc", "cluster.msc", "failover.msc", "srvmanager.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'cluadmin.msc' opens Failover Cluster Manager.",
  wrongNotes: {
    "cluster.msc": "Not the console file; use 'cluadmin.msc'.",
    "failover.msc": "Not a valid console file.",
    "srvmanager.msc": "Not a valid console file; Server Manager is 'ServerManager.exe'."
  }
},
{
  prompt: "Which command opens BitLocker Drive Encryption in Control Panel (Pro/Enterprise)?",
  options: ["control.exe /name Microsoft.BitLockerDriveEncryption", "manage-bde -status", "fvecpl.cpl", "bitlocker.msc"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — This Control Panel verb opens BitLocker settings.",
  wrongNotes: {
    "manage-bde -status": "CLI status for BitLocker; not the Control Panel.",
    "fvecpl.cpl": "There is no standard 'fvecpl.cpl'; use the Control Panel verb.",
    "bitlocker.msc": "No such MMC console."
  }
},
{
  prompt: "Which command shows BitLocker status for all drives in the console?",
  options: ["manage-bde -status", "control.exe /name Microsoft.BitLockerDriveEncryption", "cipher /status", "fsutil bitlocker status"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'manage-bde -status' shows BitLocker protection state via CLI.",
  wrongNotes: {
    "control.exe /name Microsoft.BitLockerDriveEncryption": "Opens the GUI; doesn’t print status details.",
    "cipher /status": "cipher.exe controls NTFS encryption (EFS), not BitLocker.",
    "fsutil bitlocker status": "Not a valid fsutil verb."
  }
},
{
  prompt: "Which command opens Remote Desktop Connection client?",
  options: ["mstsc", "msra", "ssh", "qwinsta"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'mstsc' launches the RDP client.",
  wrongNotes: {
    "msra": "Windows Remote Assistance, not RDP client.",
    "ssh": "SSH client, not RDP.",
    "qwinsta": "Lists sessions; doesn’t open RDP."
  }
},
{
  prompt: "Which command lists saved Wi-Fi profiles on the machine?",
  options: ["netsh wlan show profiles", "netsh wlan show profile name=\"SSID\" key=clear", "ipconfig /all", "netstat -ano"],
  answerIndex: 0,
  explainCorrect: "Correct ✅ — 'netsh wlan show profiles' lists all saved Wi-Fi profiles.",
  wrongNotes: {
    "netsh wlan show profile name=\"SSID\" key=clear": "Shows details for one profile (including key), not the list of all profiles.",
    "ipconfig /all": "Shows adapter config, not saved profiles.",
    "netstat -ano": "Shows connections and ports; unrelated to Wi-Fi profiles."
  }
}
];

// --------------- Quiz Logic ---------------
let index = 0;

const elQuestion = document.getElementById("question");
const elForm = document.getElementById("answer-form");
const elChoices = document.getElementById("choices");
const elFeedback = document.getElementById("feedback");
const elNext = document.getElementById("next-btn");
const elSubmit = document.getElementById("submit-btn");
const elProgress = document.getElementById("progress");

const HINTS = {
  "msconfig": "is for System Configuration (Systemkonfiguration), not a cleanup tool.",
  "dfrgui": "is Defragment and Optimize Drives.",
  "winver": "shows the Windows version dialog.",
  "inetcpl.cpl": "opens Internet Options.",
  "ncpa.cpl": "opens Network Connections.",
  "mmsys.cpl": "opens Sound settings.",
  "desk.cpl": "opens Display settings.",
  "msinfo32": "opens System Information.",
  "sysdm.cpl": "opens System Properties.",
  "diskmgmt.msc": "opens Disk Management.",
  "diskpart": "is the command-line disk partitioning tool.",
  "services.msc": "opens the Services console.",
  "taskschd.msc": "opens Task Scheduler.",
  "eventvwr.msc": "opens Event Viewer.",
  "psr": "starts the Problem Steps Recorder.",
  "dxdiag": "opens the DirectX Diagnostic Tool.",
  "netsh": "is the command-line network shell.",
  "wf.msc": "opens Firewall with Advanced Security.",
  "control printers": "opens the Printers folder.",
  "joy.cpl": "opens Game Controllers.",
  "main.cpl": "opens Mouse Properties.",
  "intl.cpl": "opens Region settings.",
  "charmap": "opens Character Map.",
  "cleanmgr": "opens Disk Cleanup."
};

function setProgress() {
  const pct = Math.round((index / cards.length) * 100);
  elProgress.style.width = pct + "%";
}

function renderChoices(options) {
  elChoices.innerHTML = "";
  options.forEach((opt, i) => {
    const id = `opt-${i}`;
    const wrapper = document.createElement("label");
    wrapper.className = "choice";
    wrapper.setAttribute("for", id);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "choice";
    input.value = String(i);
    input.id = id;

    const text = document.createElement("span");
    text.textContent = opt;

    wrapper.appendChild(input);
    wrapper.appendChild(text);
    elChoices.appendChild(wrapper);
  });
}

function showCard() {
  const card = cards[index];
  elQuestion.textContent = `[${index + 1}/${cards.length}] ` + card.prompt;
  renderChoices(card.options);
  elSubmit.disabled = false;
  elNext.hidden = true;
  elFeedback.className = "feedback";
  elFeedback.textContent = "";
  setProgress();
  const first = elChoices.querySelector("input[type='radio']");
  first && first.focus();
}

function lockChoices(lock = true) {
  elChoices.querySelectorAll("input[type='radio']").forEach(r => r.disabled = lock);
}

function finish() {
  elQuestion.textContent = "🎉 Great job! You finished all flashcards.";
  elForm.style.display = "none";
  elFeedback.className = "feedback ok";
  elFeedback.textContent = "Tip: edit more questions in app.js to keep practicing.";
  elProgress.style.width = "100%";
}

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const card = cards[index];
  const pickedInput = elChoices.querySelector("input[type='radio']:checked");
  if (!pickedInput) {
    elFeedback.className = "feedback err";
    elFeedback.textContent = "Please select an option first.";
    return;
  }

  const pickedIdx = Number(pickedInput.value);
  const correctIdx = card.answerIndex;
  const pickedLabel = card.options[pickedIdx];
  const correctLabel = card.options[correctIdx];

  // Clear previous highlight
  elChoices.querySelectorAll(".choice").forEach(c => c.classList.remove("correct", "wrong"));

  if (pickedIdx === correctIdx) {
    elChoices.querySelectorAll(".choice")[pickedIdx].classList.add("correct");
    elFeedback.className = "feedback ok";
    elFeedback.textContent = card.explainCorrect || `Correct ✅ — '${correctLabel}' is the right answer.`;
    lockChoices(true);
    elSubmit.disabled = true;
    elNext.hidden = false;
    elNext.focus();
  } else {
    elChoices.querySelectorAll(".choice")[pickedIdx].classList.add("wrong");
    elFeedback.className = "feedback err";
    const specific = (card.wrongNotes && card.wrongNotes[pickedLabel]) || null;
    const hint = HINTS[pickedLabel];
    let msg = "";
    if (specific) {
      msg = `'${pickedLabel}' ${specific}`;
    } else if (hint) {
      msg = `'${pickedLabel}' ${hint}`;
    } else {
      msg = `No — '${pickedLabel}' is not correct.`;
    }
    elFeedback.textContent = `${msg} Please try again.`;
  }

});

elNext.addEventListener("click", () => {
  index++;
  if (index >= cards.length) {
    finish();
  } else {
    showCard();
  }
});

// Start
showCard();
