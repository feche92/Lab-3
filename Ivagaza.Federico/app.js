$(document).ready(function () {

    $("#loginForm").bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'El email es requerido!!!'
                    },
                    emailAddress: {
                        message: 'El campo email no posee un formato válido!'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'La contraseña es requerida!!!'
                    },
                    stringLength: {
                        min: 4,
                        max: 8,
                        message: 'Por favor, ingrese entre 4 y 8 caracteres!!!'
                    }
                }
            }
        }
    })
    //SI SUPERA TODAS LAS VALIDACIONES, SE PROVOCA EL SUBMIT DEL FORM
    .on('success.form.bv', function (e) {
        e.preventDefault();
        Enviar();
    });
    $("#loginFormRegistro").bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            correo: {
                validators: {
                    notEmpty: {
                        message: 'El email es requerido!!!'
                    },
                    emailAddress: {
                        message: 'El campo email no posee un formato válido!'
                    },
                }
            },
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'El nombre es requerido!!!'
                    },
                    stringLength: {
                        min: 2,
                        max: 10,
                        message: 'Por favor, ingrese entre 2 y 10 caracteres!!!'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'El nombre solo puede contener letras.'
                    }
                }
            },
            apellido: {
                validators: {
                    notEmpty: {
                        message: 'El apellido es requerido!!!'
                    },
                    stringLength: {
                        min: 2,
                        max: 15,
                        message: 'Por favor, ingrese entre 2 y 15 caracteres!!!'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'El nombre solo puede contener letras.'
                    }
                }
            },
            legajo: {
                validators: {
                    notEmpty: {
                        message: 'El legajo es requerido!!!'
                    },
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: 'Por favor, ingrese entre 3 y 6 caracteres!!!'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'El legajo solo puede contener numeros.'
                    }
                }
            },
            clave: {
                validators: {
                    notEmpty: {
                        message: 'La clave es requerida!!!'
                    },
                    stringLength: {
                        min: 4,
                        max: 8,
                        message: 'Por favor, ingrese entre 4 y 8 caracteres!!!'
                    },
                    identical: {
                        field: 'repClave',
                        message: 'La contraseña y su confirmación no coinciden!'
                    }
                }
            },
            repClave: {
                validators: {
                    notEmpty: {
                        message: 'El campo repita clave es requerido!!!'
                    },
                    stringLength: {
                        min: 4,
                        max: 8,
                        message: 'Por favor, ingrese entre 4 y 8 caracteres!!!'
                    },
                    identical: {
                        field: 'clave',
                        message: 'La contraseña y su confirmación no coinciden!'
                    }
                }
            },
            foto: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una imagen'
                    },
                    file: {
                        extension: 'jpeg,jpg,png',
                        type: 'image/jpeg,image/png',
                        maxSize: 2097152,
                        message: 'El archivo seleccionado no es válido!'
                    },
                }
            },
            perfil: {
                validators: {
                    notEmpty : {
                        message: 'Seleccione un perfil'
                    }
                }
            }
        }
    })
    //SI SUPERA TODAS LAS VALIDACIONES, SE PROVOCA EL SUBMIT DEL FORM
    .on('success.form.bv', function (e) {
        e.preventDefault();
        Agregar();
    });
    $("#loginFormModificar").bootstrapValidator({

        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            correo: {
                validators: {
                    notEmpty: {
                        message: 'El email es requerido!!!'
                    },
                    emailAddress: {
                        message: 'El campo email no posee un formato válido!'
                    },
                }
            },
            nombre: {
                validators: {
                    notEmpty: {
                        message: 'El nombre es requerido!!!'
                    },
                    stringLength: {
                        min: 2,
                        max: 10,
                        message: 'Por favor, ingrese entre 2 y 10 caracteres!!!'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'El nombre solo puede contener letras.'
                    }
                }
            },
            apellido: {
                validators: {
                    notEmpty: {
                        message: 'El apellido es requerido!!!'
                    },
                    stringLength: {
                        min: 2,
                        max: 15,
                        message: 'Por favor, ingrese entre 2 y 15 caracteres!!!'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z]+$/,
                        message: 'El nombre solo puede contener letras.'
                    }
                }
            },
            legajo: {
                validators: {
                    notEmpty: {
                        message: 'El legajo es requerido!!!'
                    },
                    stringLength: {
                        min: 3,
                        max: 6,
                        message: 'Por favor, ingrese entre 3 y 6 caracteres!!!'
                    },
                    regexp: {
                        regexp: /^[0-9]+$/,
                        message: 'El legajo solo puede contener numeros.'
                    }
                }
            },
            foto: {
                validators: {
                    notEmpty: {
                        message: 'Seleccione una imagen'
                    },
                    file: {
                        extension: 'jpeg,jpg,png',
                        type: 'image/jpeg,image/png',
                        maxSize: 2097152,
                        message: 'El archivo seleccionado no es válido!'
                    },
                }
            },
            perfil: {
                validators: {
                    notEmpty : {
                        message: 'Seleccione un perfil'
                    }
                }
            }
        }
    })
    //SI SUPERA TODAS LAS VALIDACIONES, SE PROVOCA EL SUBMIT DEL FORM
    .on('success.form.bv', function (e) {
        e.preventDefault();
        Modificar();
    });

});