# 1. A small list representing dangerous IP addresses found on the internet
internet_blacklist = ["1.2.3.4", "5.6.7.8", "9.11.11.11"]

print("=== SOC INTERNET THREAT LOOKUP ===")

# 2. Ask the analyst to type the IP address they want to check
check_ip = input("Enter the IP address to search: ").strip()

# 3. Check if the IP address is in our list
if check_ip in internet_blacklist:
    result = "DANGEROUS! This IP is blocked on the internet."
else:
    result = "SAFE. This IP was not found on the internet blacklist."

# 4. Build a very simple report layout
report_content = f"""
THREAT REPORT
----------------------
IP Searched: {check_ip}
Scan Result: {result}
"""

# 5. Save the report automatically as a text file on your computer
file_name = "search_report.txt"
with open(file_name, "w") as file:
    file.write(report_content)

print(f"\n[DONE] Scan complete! Report saved to '{file_name}'.")
