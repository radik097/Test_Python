import sys


class CyberRangeGame:
    def __init__(self):
        self.score = 0
        self.questions = [
            {
                "question": "Which cryptographic approach yields distinct keys for data encryption and decryption?",
                "choices": ["A) Symmetric Cryptography", "B) Asymmetric Cryptography", "C) Steganography",
                            "D) Hashing Functions"],
                "correct": "B",
                "remediation": "Asymmetric cryptography utilizes a public key for encryption and a private key for decryption."
            },
            {
                "question": "What is the most definitive programmatic defense against SQL Injection (SQLi) vulnerabilities?",
                "choices": ["A) Client-side form validation", "B) Web Application Firewalls (WAF)",
                            "C) Parameterized Queries (Prepared Statements)", "D) Denylisting malicious characters"],
                "correct": "C",
                "remediation": "Parameterized queries separate user data from code execution, nullifying SQL injection attempts."
            },
            {
                "question": "Why is adding a 'Salt' to password hashes structurally vital?",
                "choices": ["A) It compresses data size", "B) It speeds up verification speeds",
                            "C) It invalidates precomputed lookup tables (Rainbow Tables)",
                            "D) It automatically encrypts the data flight path"],
                "correct": "C",
                "remediation": "Salts add unique values to inputs, ensuring identical passwords yield completely unique hashes."
            }
        ]

    def clear_screen(self):
        print("\n" * 3)

    def execute_session(self):
        print("=" * 60)
        print("          WELCOME TO THE CYBER DEFENSE APPRENTICE RANGE          ")
        print("=" * 60)
        print("Instructions: Input the single correct letter option (A, B, C, or D).\n")

        for idx, item in enumerate(self.questions, start=1):
            print(f"Incident Scene {idx}: {item['question']}")
            for choice in item['choices']:
                print(f"  {choice}")

            while True:
                user_input = input("\n[>] Selection: ").strip().upper()
                if user_input in ['A', 'B', 'C', 'D']:
                    break
                print("[!] Invalid input. Choose A, B, C, or D.")

            if user_input == item['correct']:
                print("[+] Mitigated! Threat successfully neutralized.")
                self.score += 10
            else:
                print(f"[-] Breach Detected! Incorrect defense posture.")
                print(f"[i] Remediation Advisory: {item['remediation']}")

            print("-" * 60)
            self.clear_screen()

        self.evaluate_results()

    def evaluate_results(self):
        max_score = len(self.questions) * 10
        print("=" * 60)
        print("                      TRAINING REPORT CARD                      ")
        print("=" * 60)
        print(f"Final Score: {self.score} / {max_score}")

        if self.score == max_score:
            print("Status: SecOps Elite. Excellent structural understanding of core principles.")
        elif self.score >= (max_score * 0.5):
            print("Status: Junior Analyst. Good foundational grasp, but needs review on remediation pathways.")
        else:
            print("Status: Critical Threat Level. Immediate review of core application protocols required.")
        print("=" * 60)


if __name__ == "__main__":
    try:
        range_session = CyberRangeGame()
        range_session.execute_session()
    except KeyboardInterrupt:
        print("\n[-] Range session aborted by user.")
        sys.exit(0)
