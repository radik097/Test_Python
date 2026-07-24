### Interactive SOC Incident Report Logger
### When a security breach occurs, analysts must document everything cleanly. 
### This script functions as an interactive prompt that forces you to input essential incident details, 
### validates them, and saves a formatted .txt report directly to your machine.
###########################################################################################################
import datetime

print("=========================================")
print("     SOC INCIDENT TRIAGE LOG WINDOW     ")
print("=========================================")

# 1. Gather critical investigation points from the analyst
ticket_id = input("[>] Enter Ticket ID (e.g., INC-402): ")
incident_type = input("[>] Threat Category (e.g., Phishing, Malware, Unauthorized Access): ")
affected_host = input("[>] Affected Machine Name or IP: ")
analyst_notes = input("[>] Summary of Actions Taken: ")

# 2. Automatically grab the exact current time for audit logs
current_time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

# 3. Structure the log into a professional security report format
report_template = f"""
==================================================
              SECURITY INCIDENT REPORT
==================================================
Log Timestamp:   {current_time}
Incident ID:     {ticket_id}
Classification:  {incident_type}
Target Endpoint: {affected_host}
--------------------------------------------------
INVESTIGATION NOTES & REMEDIATION STEPS:
{analyst_notes}
==================================================
"""

# 4. Save the compiled entry onto your computer disk as a text file
filename = f"incident_{ticket_id}.txt"
with open(filename, "w") as file:
    file.write(report_template)

print(f"\n[SUCCESS] Entry locked and saved safely to disk as '{filename}'!")
