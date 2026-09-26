// تفعيل زر نسخ عنوان المحفظة بضغطة زر واحدة
document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.getElementById('copyBtn');
    
    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            const walletText = "Multichat_Wallet_Community_Fund";
            
            navigator.clipboard.writeText(walletText).then(() => {
                const originalHTML = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fa-solid fa-check" style="color: #3fb950;"></i>';
                
                setTimeout(() => {
                    copyBtn.innerHTML = originalHTML;
                }, 2000);
            }).catch(err => {
                console.error('فشل النسخ:', err);
            });
        });
    }

    console.log("إدارة وتطوير ابو العز العمري - الواجهة جاهزة وتعمل بكفاءة.");
});