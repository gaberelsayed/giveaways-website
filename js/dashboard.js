function logout(){
	Swal.fire({
		text: 'Are you sure you want to logout?',
		showCancelButton: true,
		confirmButtonText: "Logout",
		confirmButtonColor: "#e7515a",
		icon: 'warning',
		backdrop: "rgba(0,0,0,0.7)"
	}).then((result) => {
		if (result.isConfirmed) {
			location.href = "/logout";
		}
	})
}