package io.edurt.datacap.service.security;

import com.fasterxml.jackson.annotation.JsonIgnore;
import edu.umd.cs.findbugs.annotations.SuppressFBWarnings;
import io.edurt.datacap.service.entity.UserEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@SuppressFBWarnings(value = {"EI_EXPOSE_REP", "EI_EXPOSE_REP2"})
public class UserDetailsService
        implements UserDetails
{
    private Long id;
    private String username;
    @JsonIgnore
    private String password;
    private Collection<? extends GrantedAuthority> authorities;
    private String avatar;

    public UserDetailsService(Long id, String username, String password,
            Collection<? extends GrantedAuthority> authorities,
            String avatar)
    {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
        this.avatar = avatar;
    }

    public static UserDetailsService build(UserEntity user)
    {
        List<GrantedAuthority> authorities = user.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(String.valueOf(role.getId())))
                .collect(Collectors.toList());
        String avatar = null;
        if (user.getAvatarConfigure() != null) {
            avatar = user.getAvatarConfigure().get("path");
        }
        return new UserDetailsService(
                user.getId(),
                user.getUsername(),
                user.getPassword(),
                authorities,
                avatar);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities()
    {
        return authorities;
    }

    @Override
    public String getPassword()
    {
        return password;
    }

    @Override
    public String getUsername()
    {
        return username;
    }

    @Override
    public boolean isAccountNonExpired()
    {
        return true;
    }

    @Override
    public boolean isAccountNonLocked()
    {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired()
    {
        return true;
    }

    @Override
    public boolean isEnabled()
    {
        return true;
    }

    public Long getId()
    {
        return id;
    }

    public String getAvatar()
    {
        return avatar;
    }

    public static UserEntity getUser()
    {
        UserEntity userInfo = new UserEntity();
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (Objects.nonNull(authentication)) {
            Object principal = authentication.getPrincipal();
            if (Objects.nonNull(principal)) {
                UserDetailsService loginPrincipalUserInfo = (UserDetailsService) principal;
                userInfo.setUsername(loginPrincipalUserInfo.getUsername());
                userInfo.setId(loginPrincipalUserInfo.getId());
            }
        }
        return userInfo;
    }
}
